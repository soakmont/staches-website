<template>
 <div class="d-inline-flex align-items-center">
    <div class="d-inline-flex align-items-center">
      <select v-if="providerName === 'MetaMask'" @change="onNetworkChanged($event)" v-model="networkId">
        <option v-for="id in networkIds" :value="id" :key="id">
          {{ chainInfo[id].networkName }}
        </option>
      </select>
    </div>
    <div class="d-inline-flex align-items-center">
      <a v-if="!providerName" @click="initializeWallet" class="btn btn-primary">Connect</a>
      <a v-else @click="disconnectWallet" class="btn btn-primary">Disconnect</a>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Web3 from 'web3'

export default {
  name: 'Web3Wallet',
  props: {
    fullWallet: {
      default: false,
      type: Boolean
    }
  },
  data() {
    return {
      web3: null,
      provider: null,
      address: null,
      networkIds: [
        '43114',
        '1',
        '137',
        '250',
        '56'
      ],
      chainInfo: {
        '43114' : {
            networkFullName: 'Avalanche Mainnet C-Chain',
            networkName: 'Avax',
            logoUrl: '../assets/avax.svg',
            rpcUrl: 'https://api.avax.network/ext/bc/C/rpc',
            currencySymbol: 'AVAX'
        },
        '1' : {
            networkName: 'Ethereum',
            networkFullName: 'Ethereum Mainnet',
            logoUrl: '../assets/mainnet.svg',
            rpcUrl: 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
            blockExplorerUrl: 'https://etherscan.io',
            currencySymbol: 'ETH'
        },
        '137' : {
            networkName: 'Polygon',
            networkFullName: 'Polygon',
            logoUrl: '../assets/polygon.svg',
            rpcUrl: 'https://polygon-rpc.com/',
            blockExplorerUrl: 'https://polygonscan.com/',
            currencySymbol: 'MATIC'
        },
        '250' : {
            networkName: 'Fantom',
            networkFullName: 'Fantom Opera',
            logoUrl: '../assets/phantom.svg',
            rpcUrl: 'https://rpc.ftm.tools',
            blockExplorerUrl: 'https://ftmscan.com',
            currencySymbol: 'FTM'
        },
        '56' : {
            networkName: 'BnB',
            networkFullName: 'Binance Smart Chain Mainnet',
            logoUrl: '../assets/bnb.svg',
            rpcUrl: 'https://bsc-dataseed1.binance.org',
            blockExplorerUrl: 'https://bscscan.com',
            currencySymbol: 'BNB'
        },
      }
    }
  },
  computed: {
    ...mapGetters({
      atLeastOneConnectedAccount: 'atLeastOneConnectedAccount',
      providerName: 'getProviderName'
    }),
    networkId: {
      get () {
        return this.$store.state.provider.networkId
      },
      set (value) {
        this.$store.commit('setNetworkId', value)
      }
    }
  },
  mounted() {
    if (window.localStorage.getItem('WEB3_CONNECT_CACHED_PROVIDER')) {
      this.initializeWallet()
    }
  },
  methods: {
    async initializeWallet() {
      try {
        window.provider = await this.$web3Modal.connect()
        window.web3 = new Web3(window.provider)

        await this.getProviderMetadata();

        window.provider.on('accountsChanged', async () => {
          await this.getProviderMetadata();
        })

        window.provider.on('chainChanged', async () => {
          await this.getProviderMetadata();
        })

        window.provider.on('disconnect', async () => {
          await this.getProviderMetadata();
        })

        window.provider.on('connect', async () => {
          await this.getProviderMetadata();
        })

      } catch (e) {
        this.disconnectWallet();
        let currentError = e.message ? e.message : e
        this.$swal.fire({
          title: 'Error',
          text: currentError,
          icon: 'error',
          buttonsStyling: false,
          customClass: {
            confirmButton: 'btn btn-danger btn-fill',
          },
        })
      }
    },
    async onNetworkChanged(event) {
      if(await this.getProviderName() === "MetaMask"){
        await this.swichNetwork(event.target.value)
      }
    },
    async swichNetwork(chainId) {
      const currentChainId = await window.web3.eth.net.getId()
    
      if (currentChainId !== chainId) {
        try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
              params: [{ chainId: Web3.utils.toHex(chainId) }],
            });
        } catch (switchError) {
          if (switchError.code === 4902) {
            await this.addNetwork(chainId)
          }
          if (switchError.code === -32002) {
             this.$swal.fire({
              title: 'Error',
              text: 'You already have a pending request in your MetaMask',
              icon: 'error',
              buttonsStyling: false,
            })
          }
        }
      }
    },
    async addNetwork(chainId) {
      try {
        await ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              nativeCurrency: {
                  name: this.chainInfo[chainId].currencySymbol,
                  symbol: this.chainInfo[chainId].currencySymbol,
                  decimals: 18,
              },
              blockExplorerUrls: [this.chainInfo[chainId].blockExplorerUrl],
              chainId: Web3.utils.toHex(chainId),
              chainName: this.chainInfo[chainId].networkFullName,
              rpcUrls: [this.chainInfo[chainId].rpcUrl]
            },
          ],
        });
      } catch (error) {
        this.$swal.fire({
          title: 'Error',
          text: error,
          icon: 'error',
          buttonsStyling: false
        })
      }
    },
    async getProviderMetadata() {
      try {
        const accounts = await window.web3.eth.getAccounts()
        const networkId = await window.web3.eth.net.getId()
        const providerName = await this.getProviderName()
        const networkName = await this.getNetworkName()
        let qaoApprovalLimit = 0

        let qaoBalance = '0'
        let ethBalance = '0'
        let account = null
        let connectedAccounts = 0

        if (accounts.length > 0) {
          ;[account] = accounts
          connectedAccounts = accounts.length
        }

        if ((await this.contractIsDeployedOnNetwork()) && accounts.length > 0) {
          const notWeiQaoBalance = await window.qaoContract.methods
            .balanceOf(account)
            .call()
          const notWeiEthBalance = await window.web3.eth.getBalance(account)
          qaoApprovalLimit = await window.qaoContract.methods
            .allowance(account, process.env.QAO_VOTING_ENGINE_ADDRESS)
            .call()

          this.$store.dispatch('triggerQaoApprovalLimit', qaoApprovalLimit)
          qaoBalance = await window.web3.utils.fromWei(
            notWeiQaoBalance,
            'ether'
          )
          ethBalance = await window.web3.utils.fromWei(
            notWeiEthBalance,
            'ether'
          )
        }

        const providerMetadata = {
          qaoBalance,
          ethBalance,
          account,
          networkName,
          providerName,
          networkId,
          connectedAccounts,
          qaoApprovalLimit,
        }

        this.$store.dispatch('syncProvider', providerMetadata)
      } catch (e) {
        let currentError = e.message ? e.message : e
        this.$swal.fire({
          title: 'Error',
          text: currentError,
          icon: 'error',
          buttonsStyling: false,
          customClass: {
            confirmButton: 'btn btn-danger btn-fill',
          },
        })
      }
    },
    async contractIsDeployedOnNetwork() {
      try {
        await window.qaoContract.methods.symbol().call()
        return true
      } catch (e) {
        return false
      }
    },
    async getProviderName() {
      if (await window.provider.isMetaMask) return 'MetaMask'
      else return 'WalletConnect'
    },
    async getNetworkName() {
      const networkId = await window.web3.eth.net.getId()
      switch (networkId) {
        case 1:
          return 'Etherum'
        case 2:
          return 'Morden'
        case 3:
          return 'Ropsten'
        case 4:
          return 'Rinkeby'
        case 5:
          return 'Goerli'
        case 42:
          return 'Kovan'
        case 56:
          return 'BnB'
        case 137:
          return 'Polygon'
        case 250:
          return 'Phantom'
        case 43114:
          return 'Avax'
        default:
          return 'Unknown'
      }
    },
    async disconnectWallet() {
      window.localStorage.removeItem('WEB3_CONNECT_CACHED_PROVIDER')
      await this.$web3Modal.clearCachedProvider();
      window.web3 = null;
      window.provider = null;
      this.$store.commit('removeProvider');
    },
  },
}
</script>
<style lang="scss">
.web3modal-modal-lightbox {
  z-index: 999999 !important;
  font-family: 'arial';
}
.web3modal-provider-description {
  font-size: 0.7rem;
  margin-top: 1rem;
}
a:hover {
  cursor: pointer;
}
</style>
