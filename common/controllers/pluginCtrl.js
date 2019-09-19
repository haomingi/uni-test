// 不要使用全局组件 全局过滤器 不生效！！！！！！
import http from '../api/http'
// import allFilter from '../filters/all'
import myMixin from './myMixin'
// import img from '@/components/img.vue'

let pluginCtrl = {
  init (Vue) {
    // 指令
    // Vue.use(scrollDirective) // 触发滚动

    // 过滤器
    // Vue.use(allFilter)

    // 混合全局钩子
    Vue.mixin(myMixin)

    // 全局组件
    // globalComponent.install(Vue)
		// Vue.component('uniImg', img)

    // 添加全局this
    // Vue.prototype.getCurrent = utils.getCurrent
    // Vue.prototype.getChineseUnit = utils.getChineseUnit
		// 线上
		let imgUrl = ''
		if (process.env.NODE_ENV === 'production') {
			imgUrl = 'https://mr.molbase.net/images/xcx/xms'
		}
    Vue.prototype.baseImgUrl = imgUrl
    Vue.prototype.$http = http
  }
}

export default pluginCtrl
