import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad)

import VueI18n from 'vue-i18n'
import { translations } from '@/assets/lang/index.js'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: translations
})

Vue.config.productionTip = false

require('vue-image-lightbox/dist/vue-image-lightbox.min.css')
require('vue2-animate/dist/vue2-animate.min.css')
require('video.js/dist/video-js.css')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  template: '<App/>',
  components: { App }
})
