<template>
  <div class="task">
    {{ task.title }}
    <div>
      <button>Редактировать</button>
      <button @click="removeTaskAction(task.id)">Удалить</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Task',
  props: {
    task: {
      value: Object,
      default: () => {}
    }
  },
  methods: {
    ...mapActions(['removeTaskAction'])
  }
}
</script>

<style lang="scss" scoped>
.task {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
</style>
