<template>
    <video-player  class="video-player-box  vjs-big-play-centered"
                   ref="videoPlayer"
                   :options="playerOptions"
                   :playsinline="false"
                   :playlist="playlist"
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
  props: ['playlist'],
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
  components: {
    videoPlayer
  },
  mounted () {
    this.player.playlist([this.playlist])
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
      player.requestFullscreen()
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
      // console.log('the player is readied', player)
      // you can use it to do something...
      // player.[methods]
    }
  }
}
</script>

<style>
  .video-player {
      padding: 1rem;
  }
  .video-js {
    width: 100%;
    min-width: 400px;
    min-height: 225px;
  }
</style>