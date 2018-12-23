<template src="../../static/theme/base/education.html"></template>

<script>
import TimelineView from './TimelineComponent'
export default {
  computed: {
    education () {
      for (var item in this.$store.getters.getSection('education').items) {
        this.collapse.push(false)
        item = item + 0
      }
      return this.$store.getters.getSection('education')
    },
    honors () {
      return this.$store.getters.getSection('honors')
    }
  },
  data () {
    return {
      collapse: []
    }
  },
  methods: {
    toggleCourses (index) {
      this.$set(this.collapse, index, !this.collapse[index])
    },
    isVisible (index) {
      return this.collapse[index]
    }
  },
  components: {'TimelineView': TimelineView, 'TimelineComponent': TimelineView}
}
</script>

<style scoped>
.media {
  border: none;
}
</style>
