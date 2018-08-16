<template>
    <video-player  class="video-player-box"
                   ref="videoPlayer"
                   :options="playerOptions"
                   :playsinline="true"
                   customEventName="customstatechangedeventname"

                   @play="onPlayerPlay($event)"
                   @pause="onPlayerPause($event)"
                   @ended="onPlayerEnded($event)"
                   @waiting="onPlayerWaiting($event)"
                   @playing="onPlayerPlaying($event)"
                   @loadeddata="onPlayerLoadedData($event)"
                   @timeupdate="onPlayerTimeUpdate($event)"
                   @canplay="onPlayerCanPlay($event)"
                   @canplaythrough="onPlayerCanPlayThrough($event)"

                   @statechanged="playerStateChanged($event)"
                   @ready="playerReadied">
    </video-player>
</template>

<script>
import 'video.js/dist/video-js.css'
import { videoPlayer } from 'vue-video-player'
import 'videojs-playlist/dist/videojs-playlist.js'

// Similarly, you can also introduce the plugin resource pack you want to use within the component
// import 'some-videojs-plugin'
export default {
  data () {
    return {
      playerOptions: {
        // videojs options
        muted: true,
        language: 'en',
        playbackRates: [1.0, 1.5, 2.0],
        fluid: true
      }
    }
  },
  mounted () {
    console.log('this is current player instance object', this.player)
    var playlist = [{
      sources: [
        {
          type: 'video/mp4',
          src: './static/screencasts/gis/GIS.mp4.mp4'
        },
        {
          type: 'video/webm',
          src: './static/screencasts/gis/GIS.webmhd.webm'
        },
        {
          type: 'video/ogv',
          src: './static/screencasts/gis/GIS.oggtheora.ogv'
        }],
      poster: ''
    },
    {
      sources: [
        {
          type: 'video/mp4',
          src: './static/screencasts/subway-car-sets/Subway Car Sets.mp4.mp4'
        },
        {
          type: 'video/webm',
          src: './static/screencasts/subway-car-sets/Subway Car Sets.webmhd.webm'
        },
        {
          type: 'video/ogv',
          src: './static/screencasts/subway-car-sets/Subway Car Sets.oggtheora.ogv'
        }],
      poster: ''
    }]
    this.player.playlist(playlist)
    this.player.playlist.autoadvance(0)
  },
  computed: {
    player () {
      return this.$refs.videoPlayer.player
    }
  },
  methods: {
    onPlayerPlay (player) {
        /**
         * _gs('event', 'Event Name', {
         *  extra: 'event',
         * details: true
         * });
         */
    },
    onPlayerPause (player) {
        /**
         * _gs('event', 'Event Name', {
         *  extra: 'event',
         * details: true
         * });
         */
    },
    onPlayerEnded (player) {
        /**
         * _gs('event', 'Event Name', {
         *  extra: 'event',
         * details: true
         * });
         */
    },
    onPlayerWaiting (player) {
        /**
         * _gs('event', 'Event Name', {
         *  extra: 'event',
         * details: true
         * });
         */
    },
    onPlayerPlaying (player) {
        /**
         * _gs('event', 'Event Name', {
         *  extra: 'event',
         * details: true
         * });
         */
    },
    onPlayerLoadedData (player) {
        /**
         * _gs('event', 'Event Name', {
         *  extra: 'event',
         * details: true
         * });
         */
    },
    onPlayerTimeUpdate (player) {
        /**
         * _gs('event', 'Event Name', {
         *  extra: 'event',
         * details: true
         * });
         */
    },
    onPlayerCanPlay (player) {
        /**
         * _gs('event', 'Event Name', {
         *  extra: 'event',
         * details: true
         * });
         */
    },
    onPlayerCanPlayThrough (player) {
        /**
         * _gs('event', 'Event Name', {
         *  extra: 'event',
         * details: true
         * });
         */
    },
    playerStateChanged (playerCurrentState) {
        /**
         * _gs('event', 'Event Name', {
         *  extra: 'event',
         * details: true
         * });
         */
      // console.log('player current update state', playerCurrentState)
    },

    // player is ready
    playerReadied (player) {
      console.log('the player is readied', player)
      // you can use it to do something...
      // player.[methods]
    }
  },
  components: {
    videoPlayer
  }
}
</script>

<style>
  .video-js {
    width: 100%;
  }
</style>