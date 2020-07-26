import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import 'lib-flexible/flexible.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import qs from 'qs'

Vue.prototype.$store = store;

Vue.use(ElementUI);

Vue.prototype.$axios = axios
Vue.prototype.$qs = qs
Vue.config.productionTip = false

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
