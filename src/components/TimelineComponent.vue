<template>

<div class="timeline">
  <div class="tag is-medium" v-if="this.end"><span class="hint--bottom" :aria-label="endTooltip">{{endYear}}</span></div>
  <div class="circle" v-if="!this.end"></div>
  <div class="timeline-bar" v-if="(this.end && this.start && (this.end != this.start)) || (!this.end && this.start)">000</div>
  <div class="tag is-medium"v-if="this.start && (this.end != this.start)"><span class="hint--bottom" :aria-label="startTooltip">{{startYear}}</span></div>
</div>
</template>

<script>
import moment from 'moment'
export default {
  props: ['start', 'end'],
  computed: {
    endYear () {
      return moment(this.end).year()
    },
    startYear () {
      return moment(this.start).year()
    },
    startTooltip () {
      if (moment(this.start, 'YYYY-MM-DD', true).isValid()) {
        return moment(this.start).format('MMMM Do')
      } else {
        return moment(this.start).format('YYYY')
      }
    },
    endTooltip () {
      if (moment(this.end, 'YYYY-MM-DD', true).isValid()) {
        return moment(this.end).format('MMMM Do')
      } else {
        return moment(this.end).format('YYYY')
      }
    }
  }
}
</script>

<style scoped>
.tag {
  color: white;
  background-color: hsl(217, 45%, 45%);
}
.tag:hover {
  background-color: hsl(217, 40%, 40%);
}
.circle {
  border-radius: 15px;
  border: 1px #7a7a7a dashed;
  width: 15px;
  height: 15px;
  margin-left: 4px;
}
</style>
