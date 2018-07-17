<template src="../../static/theme/base/portfolio.html">
</template>

<script>
import TimelineComponent from './TimelineComponent'
export default {
  computed: {
    portfolio () {
      return this.$store.getters.getSection('portfolio')
    },
    template () {
      return this.$store.getters.getTemplate('portfolio.html')
    },
    employment () {
      return this.$store.getters.getSection('employment')
    }
  },
  components: {'TimelineComponent': TimelineComponent}
}
</script>

<style scoped>

</style>
