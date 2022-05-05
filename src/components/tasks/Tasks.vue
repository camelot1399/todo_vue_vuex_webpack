<template>
  <div class="tasks">

    <div v-if="getTasks.length">
      <div class="tasksList">
        <div v-for="item in getTasks" :key="item.id">
          <Task :task="item" />
        </div>
      </div>
    </div>

    <div v-else>Нет ни одной таски</div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Task from '../task/Task.vue'
export default {
  name: 'Tasks',
  components: {
    Task
  },
  computed: {
    ...mapGetters(['getTasks'])
  },
  mounted () {
  }
}
</script>

<style>

</style>
