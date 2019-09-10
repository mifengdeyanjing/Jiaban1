// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Font from "../font/iconfont.css"
Vue.config.productionTip = false
import 'mint-ui/lib/style.css'

import axios from "axios"
Vue.prototype.axios = axios

//全局引入mint-ui 和 内部的组件
import { DatetimePicker} from 'mint-ui'
//注册组件 mt-datetime-picker
Vue.component(DatetimePicker.name, DatetimePicker);

// Vue.$emit("xiabiao")


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
