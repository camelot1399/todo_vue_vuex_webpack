<template>
  <div class="tasks">

    <div v-if="getTasks.length">
      <div class="tasksList">
        <div v-for="item in getTasks" :key="item.id">
          {{item.title}}
        </div>
      </div>
    </div>

    <div v-else>Нет ни одной таски</div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Tasks',
  computed: {
    ...mapGetters(['getTasks'])
  },
  mounted () {
  }
}
</script>

<style>

</style>
