export default {
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
    },
    SAVETASK (state, payload) {
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
    },
    saveTaskAction: ({ commit, state }, payload) => {
      console.log('payload', payload)
      const tasks = state.tasks.map(task => {
        if (task.id === payload.id) {
          return payload
        }

        return task
      })

      console.log('tasks', tasks)

      commit('SAVETASK', tasks)
    }
  },
  getters: {
    getTasks: s => s.tasks
  }
}
