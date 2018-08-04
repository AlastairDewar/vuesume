<template src="../../static/theme/base/events.html">
</template>

<script>
export default {
  computed: {
    events () {
      return this.$store.getters.getSection('events')
    }
  }
}
</script>

<style scoped>
    a + a:before {
        content: ", ";
    }
</style>