import Vuex from 'vuex'
const store = _ => {
  return new Vuex.Store({
    state: {
      provider: {
        qaoBalance: "0",
        ethBalance: "0",
        account: null,
        connectedAccounts: 0,
        networkName: "",
        providerName: "",
        networkId: "",
        qaoApprovalLimit: 0
      },
      isSoundEnabled: true,
    },
    mutations: {
      setProvider (state, payload) {
        state.provider = payload
      },
      removeProvider (state, payload) {
        state.provider = {
          qaoBalance: "0",
          ethBalance: "0",
          account: null,
          connectedAccounts: 0,
          networkName: "",
          providerName: "",
          networkId: "",
          qaoApprovalLimit: 0
        }
      },
      setConnectedAccount (state, payload) {
        state.provider.connectedAccounts = payload
      },
      setQaoApprovalLimit (state, payload) {
        state.provider.qaoApprovalLimit = payload
      },
      toggleSound(state) {
        state.isSoundEnabled = !state.isSoundEnabled;
        localStorage.setItem('isSoundEnabled', state.isSoundEnabled);
      },
      initializeSound(state) {
        const isSoundEnabled = JSON.parse(localStorage.getItem('isSoundEnabled'));
        if(isSoundEnabled) {
          state.isSoundEnabled = true;
          localStorage.setItem("isSoundEnabled", true);
        } else {
          state.isSoundEnabled = false;
          localStorage.setItem("isSoundEnabled", false);
        }
      },
    },
    actions: {
      syncProvider: ({ commit }, payload) => {
        commit('setProvider', payload)
      },
      syncConnectedAccount: ({ commit }, payload) => {
        commit('setConnectedAccount', payload)
      },
      triggerQaoApprovalLimit: ({ commit }, payload) => {
        commit('setQaoApprovalLimit', payload)
      },
    },
    getters:{
      getNetworkName: state => state.provider ? state.provider.networkName: null,
      getQaoBalance: state => state.provider ? state.provider.qaoBalance: null,
      getAccount: state => state.provider ? state.provider.account: null,
      getProviderName: state => state.provider ? state.provider.providerName: null,
      getQaoApprovalLimit: state => state.provider ? state.provider.qaoApprovalLimit: 0,
      atLeastOneConnectedAccount: state => state.provider.connectedAccounts <= 0
    }
  })
}

export default store