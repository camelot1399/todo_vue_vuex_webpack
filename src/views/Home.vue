<template>
  <div class="home">
    <h1>TODO</h1>

    <input type="text" v-model="text" />
    <button>Отправить</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data () {
    return {
      text: ''
    }
  },
  mounted () {}
}
</script>
