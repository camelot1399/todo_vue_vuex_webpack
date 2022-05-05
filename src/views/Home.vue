<template>
  <div class="home">
    <h1>TODO</h1>

    <input type="text" v-model="text" />
    <button @click="addNewTask()">Отправить</button>

    <Tasks />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Tasks from '../components/tasks/Tasks.vue'
export default {
  name: 'Home',
  components: {
    Tasks
  },
  data () {
    return {
      text: ''
    }
  },
  methods: {
    ...mapActions(['addTaskAction']),
    addNewTask () {
      this.addTaskAction(this.text)
      this.text = ''
    }
  },
  mounted () {
  }
}
</script>4
