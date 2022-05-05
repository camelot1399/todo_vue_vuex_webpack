import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      { id: 1, title: 'таска 1' },
      { id: 2, title: 'матрешка' },
      { id: 3, title: 'кукуруза' }
    ]
  },
  mutations: {
    ADDTASKMUTATIONS (state, payload) {
      state.tasks.push(payload)
    }
  },
  actions: {
    addTaskAction: ({ commit }, payload) => {
      commit('ADDTASKMUTATIONS', payload)
    }
  },
  modules: {
  },
  getters: {
    getTasks: s => s.tasks
  }
})
