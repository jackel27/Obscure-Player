import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
import middlewares from './middleware'

Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  middlewares,
  strict: true
})
