import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: {
        56: "https://bsc-dataseed1.binance.org",
        137: "https://polygon-rpc.com/",
        250: "https://rpc.ftm.tools",
        43114: "https://api.avax.network/ext/bc/C/rpc"
      },
      infuraId: process.env.INFURA_PROJECT_ID
    }
  },
};

const web3Modal = new Web3Modal({
  network: process.env.NETWORK, // optional
  cacheProvider: true, // optional
  providerOptions // required
});

export default function({store, app}, inject) {
  inject('web3Modal', web3Modal);
}