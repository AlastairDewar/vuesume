<template src="../../static/theme/base/skills.html">
</template>

<script>
export default {
  computed: {
    skills () {
      return this.$store.getters.getSection('skills')
    }
  }
}
</script>

<style scoped>
    ul {
        display: inline;
        list-style: none;
        margin: 0;
    }

    ul li {
        display: inline;
    }

    ul li:after {
        content: ", ";
    }

    ul li:last-child:after {
        content: "";
    }
</style>
