<template src="../../static/theme/base/portfolio.html">
</template>
<script>
import TimelineComponent from './TimelineComponent'
import LightBox from 'vue-image-lightbox'
import VideoComponent from './VideoComponent'

export default {
  computed: {
    portfolio () {
      return this.$store.getters.getSection('portfolio')
    },
    employment () {
      return this.$store.getters.getSection('employment')
    },
    template () {
      return this.$store.getters.getTemplate('portfolio.html')
    },
    advancedMode () {
      return this.$store.getters.getAdvancedMode
    }
  },
  components: {'TimelineComponent': TimelineComponent, 'LightBox': LightBox, 'VideoComponent': VideoComponent},
  methods: {
    openGallery (project, index) {
      this.$refs[`lightbox${project}`][0].showImage(index)
    }
  }
}
</script>

<style scoped>
    import 'video.js/dist/video-js.css'

    .stack {
        margin: 20px auto;
        width: 400px;
        padding: 0;
        position: relative;
        max-width: 100%;
    }

    .stack img {
        max-width: 100%;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
        outline: 1px solid transparent;
    }
</style>
