<template>
  <div v-if="type === 'A'">
    A
  </div>
  <div v-else-if="type === 'B'">
    B
  </div>
  <div v-else-if="type === 'C'">
    C
  </div>
</template>
<script>
  export default {
    components: {

    },
    data () {
      return {

      }
    }
  }
</script>
<style>

</style>
