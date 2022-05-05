<template>
  <div class="home">
    <h1>TODO</h1>

    <input type="text" v-model="text" />
    <Button @onClick="addNewTask()">
      Отправить
    </Button>

    <Tasks />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Tasks from '../components/tasks/Tasks.vue'
import Button from '../components/UI/Button.vue'
export default {
  name: 'Home',
  components: {
    Tasks,
    Button
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
