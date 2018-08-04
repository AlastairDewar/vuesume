<template src="../../static/theme/base/profile.html">
</template>

<script>
import LanguagesComponent from './LanguagesComponent'

export default {
  name: 'headerview',
  computed: {
    profile () {
      return this.$store.getters.getSection('profile')
    }
  },
  components: {'LanguagesComponent': LanguagesComponent}
}
</script>

<style scoped>
    div.profile p.header-text i.icon {
        margin-right: 0.5rem;
    }
</style>
