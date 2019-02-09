// 将 axios 封装成为一个组件，全局使用
import axios from 'axios'
var myaxios = {}
// 添加一个方法 ： install
myaxios.install = function (Vue) {
  // 统一挂载请求路径
  axios.defaults.baseURL = 'http://localhost:8888/api/private/v1'
  // 将 axios 挂载到 vue 的原型中
  Vue.prototype.$http = axios
}
export default myaxios
