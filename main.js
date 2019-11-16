import Vue from 'vue'
import App from './App'

// 引入echarts
import echarts from 'echarts/echarts.min.js'
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
