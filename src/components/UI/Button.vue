<template>
  <button
    :type="type"
    @click="$emit('onClick')"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: {
      value: String,
      default: () => 'text'
    }
  }
}
</script>

<style>

</style>
