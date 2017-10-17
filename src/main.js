// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vuex from 'vuex'
import App from './App'
import router from './router.js'

Vue.use(vuex)
Vue.config.productionTip = false
/* eslint-disable no-new */
const store = new vuex.Store({
  state: {
  },
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
