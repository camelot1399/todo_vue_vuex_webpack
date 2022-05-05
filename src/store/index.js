import Vue from 'vue'
import Vuex from 'vuex'
import { Modal } from './module/modal.js'
import tasks from './module/tasks.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    tasks,
    Modal
  }
})
