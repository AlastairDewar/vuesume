<template src="../../static/theme/base/profile.html">
</template>

<script>
import LanguagesComponent from './LanguagesComponent'
import Switches from 'vue-switches'

export default {
  name: 'headerview',
  computed: {
    profile () {
      return this.$store.getters.getSection('profile')
    },
    languages () {
      return this.$store.getters.getSection('languages')
    }
  },
  methods: {
    shouldRender (value) {
      return value === undefined ? true : (value === this.$store.getters.getAdvancedMode)
    }
  },
  components: {'LanguagesComponent': LanguagesComponent, 'Switches': Switches},
  data () {
    return {
      advancedMode: true
    }
  },
  watch: {
    'advancedMode': function (val, oldVal) {
      this.$store.dispatch('toggleAdvancedMode')
    }
  }
}
</script>

<style>
    div.profile p.header-text i.icon {
        margin-right: 0.25rem;
    }
    span.vue-switcher__label {
        text-align: center;
    }
    label.vue-switcher {
        width: 100%;
    }


    label.vue-switcher.vue-switcher--bold.vue-switcher-theme--custom.vue-switcher-color--white div {
      background-color: #dcdcdc;
      margin-left: auto;
      margin-right: auto;
    }
    label.vue-switcher.vue-switcher--bold.vue-switcher-theme--custom.vue-switcher-color--white div:after {
        background-color: #f2f2f2;
    }
    label.vue-switcher.vue-switcher--bold.vue-switcher-theme--custom.vue-switcher-color--white.vue-switcher--unchecked div {
        background-color: #e8e8e8;
    }
    label.vue-switcher.vue-switcher--bold.vue-switcher-theme--custom.vue-switcher-color--white.vue-switcher--unchecked div:after {
        background-color: #f5f5f5;
    }
    label.vue-switcher input {
        top: 0;
    }
    .vue-switcher--bold .vue-switcher__label span {
        font-family: 'Carme', sans-serif;
        color: #ffffff;
        font-size: 1.25rem;
        font-weight: 400;
        line-height: 1.25;
    }
    label.vue-switcher {
        margin-bottom: 1rem;
    }
</style>
