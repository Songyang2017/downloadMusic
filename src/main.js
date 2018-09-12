// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueLazyload from 'vue-lazyload'
import router from './router'
import fastclick from 'fastclick'

Vue.config.productionTip = false

fastclick.attach(document.body)

Vue.use(VueLazyload, {
  error: require('assets/bg-icon.png'),
  loading: require('assets/bg-icon.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
