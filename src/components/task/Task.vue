<template>
  <div class="task">

    <div v-if="!isEditMode">{{ task.title }}</div>
    <div v-else>
      <input type="text" value="editText" v-model="editText">
    </div>

    <div>
      <div v-if="!isEditMode">
        <Button @onClick="editMode()">Редактировать</Button>
        <button @click="removeTaskAction(task.id)">Удалить</button>
      </div>
      <div v-else>
        <Button @onClick="saveText(task)">Сохранить</Button>
      </div>

    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Button from '../UI/Button.vue'
export default {
  components: { Button },
  name: 'Task',
  props: {
    task: {
      value: Object,
      default: () => {}
    }
  },
  data () {
    return {
      isEditMode: false,
      editText: ''
    }
  },
  methods: {
    ...mapActions(['removeTaskAction', 'saveTaskAction']),
    editMode () {
      this.editText = this.task.title
      this.isEditMode = true
    },
    saveText (task) {
      this.saveTaskAction({
        id: task.id,
        title: this.editText
      })
      this.isEditMode = false
    }
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
