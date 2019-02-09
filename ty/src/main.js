// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/index.css'

// 统一设置请求路径
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1'
// 挂载到 vue 的原型中
Vue.prototype.$http = axios

Vue.use(Element)

Vue.config.productionTip = false

/* eslint-disable no-new */
// 创建一个vue实例
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
