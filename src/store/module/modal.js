export const Modal = {
  state: {
    isModal: false
  },
  mutations: {
    SETISMODAL (state, payload) {
      state.isModal = payload
    }
  },
  actions: {
    setIsModal ({ commit, state }) {
      const status = !state.isModal
      commit('SETISMODAL', status)
    }
  },
  getters: {
    isModal: s => s.isModal
  }
}
