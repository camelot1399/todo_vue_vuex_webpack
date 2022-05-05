<template>
  <div class="home">
    <h1>TODO</h1>

    <Button @onClick="setIsModal()">показать модалку</Button>

    <br>

    <input type="text" v-model="text" />
    <Button @onClick="addNewTask()">
      Отправить
    </Button>

    <Tasks />
    <Modal />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Modal from '../components/modal/Modal.vue'
import Tasks from '../components/tasks/Tasks.vue'
import Button from '../components/UI/Button.vue'
export default {
  name: 'Home',
  components: {
    Tasks,
    Button,
    Modal
  },
  data () {
    return {
      text: ''
    }
  },
  methods: {
    ...mapActions(['addTaskAction', 'setIsModal']),
    addNewTask () {
      this.addTaskAction(this.text)
      this.text = ''
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
</style>
