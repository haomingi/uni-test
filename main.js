import Vue from 'vue'
import App from './App'
import pluginCtrl from './common/controllers/pluginCtrl'
// import img from '@/components/img.vue'
// import allFilter from '@/common/filters/all'

Vue.config.productionTip = false

App.mpType = 'app'

// 插件初始化
pluginCtrl.init(Vue)
// Vue.component('uniImg', img)
// Vue.use(allFilter)
const app = new Vue({
    ...App
})
app.$mount()
