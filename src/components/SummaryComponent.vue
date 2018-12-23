<template src="../../static/theme/base/summary.html">
</template>

<script>
    export default {
      computed: {
        summary () {
          return this.$store.getters.getSection('summary')
        }
      }
    }
</script>

<style scoped>
</style>
