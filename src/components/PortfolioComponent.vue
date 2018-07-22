<template src="../../static/theme/base/portfolio.html">
</template>
<script>
import TimelineComponent from './TimelineComponent'
import LightBox from 'vue-image-lightbox'

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
    }
  },
  components: {'TimelineComponent': TimelineComponent, 'LightBox': LightBox},
  methods: {
    openGallery (index) {
      this.$refs.lightbox[0].showImage(index)
    }
  }
}
</script>

<style scoped>
    ul li img {
        padding: 0 .125rem
    }
    ul li img:hover {
        cursor: pointer;
    }
</style>
