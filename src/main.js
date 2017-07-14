// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import LC from 'leancloud-storage'

import VueResource from 'vue-resource'
Vue.use(VueResource)

import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)

import Moment from 'moment'
Vue.prototype.$moment = Moment

import axios from 'axios'
Vue.prototype.$axios = axios

import Vuex from 'vuex'
Vue.use(Vuex)

import store from './store'

/* Leancloud storage from 444096525 */
const appId = '2jhPzbSR0oyUD37ro3n9zNqJ-gzGzoHsz'
const appKey = 'rsMSi2njA3t0VhCuO8gSo8rX'
LC.init({ appId, appKey })
Vue.prototype.$LC = LC

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
