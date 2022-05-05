<template>
  <div class="home">
    <h1>TODO</h1>

    <input type="text" v-model="text" />
    <button @click="addTaskAction({ id: new Date(), title: text })">Отправить</button>

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
    ...mapActions(['addTaskAction'])
  },
  mounted () {
  }
}
</script>4
