<template src="../../static/theme/base/languages.html"></template>

<script>
var Flags = require('emoji-flags')
export default {
  computed: {
    languages () {
      return this.$store.getters.getSection('languages')
    }
  },
  methods: {
    getFlag (icon) {
      return Flags.countryCode(icon).emoji
    }
  }
}
</script>

<style scoped>
    .headline {
        font-size: 16px !important;
    }

    .headline .icon {
        margin-right: 0;
    }

    .headline span {
        color: white;
        position: relative;
        text-align: center;
        background-color: hsl(217, 45%, 45%);
    }

    dl {
      color: white;
    }
</style>
