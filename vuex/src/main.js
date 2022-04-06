import { createApp } from 'vue'
import store from './store'
import App from './App.vue'
// import axios from 'axios'
import { request } from './network/request'



createApp(App).use(store).mount('#app')
//创建对应的axios实例
/* const instance1 = axios.create({
  baseURL: 'http://123.207.32.32:8000',
  timeout: 5000
})
instance1({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
}) */
//axios的基本使用
/* axios({
  url: 'http://123.207.32.32:8000/home/data'
}).then(res => {
  console.log(res);
}) */
request({
  url: '/home/multidata',
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})