import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
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