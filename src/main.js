// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 基础样式的修饰，保证所有浏览器显示的所有效果一致
import './assets/styles/reset.css'
// 1px边框解决方案
import './assets/styles/border.css'
// click事件延迟300毫秒issue解决方案
// npm install fastclick --save
import fastClick from 'fastclick'

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 路由就是根据网址的不同，返回不同的内容给用户
  router,
  components: { App },
  template: '<App/>'
})
