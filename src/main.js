// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'normalize.css'
import 'animate.css'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/icon-font/iconfont.css'
import router from './router'
import store from './store'

import Vue from 'vue'
import App from './App'
import Utils from './assets/js/utils.js'


Vue.config.productionTip = false;

Vue.use(Element);
Vue.use(Utils);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
