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
    ADDTASK (state, payload) {
      state.tasks.push(payload)
    },
    REMOVETASK (state, payload) {
      state.tasks = payload
    }
  },
  actions: {
    addTaskAction: ({ commit }, payload) => {
      const data = {
        id: new Date(),
        title: payload
      }

      commit('ADDTASK', data)
    },
    removeTaskAction: ({ commit, state }, id) => {
      const filterTasks = state.tasks.filter(task => task.id !== id)
      commit('REMOVETASK', filterTasks)
    }
  },
  modules: {
  },
  getters: {
    getTasks: s => s.tasks
  }
})
