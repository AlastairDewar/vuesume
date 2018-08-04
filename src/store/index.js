import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cv: [],
    advancedMode: false
  },
  mutations: {
    setCV (state, value) {
      state.cv = value
      document.title = state.cv.pageTitle
    },
    toggleAdvancedMode (state) {
      state.advancedMode = !state.advancedMode
    }
  },
  getters: {
    getCV: state => state.cv,
    getSection: (state, getters) => (section) => {
      return state.cv[section]
    },
    getName: state => state.cv['profile']['firstname'] + ' ' + state.cv['profile']['lastname'],
    getAdvancedMode: state => state.advancedMode,
    displaySection: (state) => (query) => {
      var advancedMode = state.cv[query].advanced
      return state.cv[query].display && (advancedMode === undefined ? true : (advancedMode === state.advancedMode))
    }
  },
  actions: {
    loadCV ({commit}) {
      let vitae = require('../../static/cv.json')
      commit('setCV', vitae)
    },
    toggleAdvancedMode ({commit}) {
      commit('toggleAdvancedMode')
    }
  }
})
