/*
 * @Description: 新加的ajax处理
 * @Author: haoming
 * @Date: 2019-09-02 16:49:29
 * @LastEditors: haoming
 * @LastEditTime: 2019-09-05 13:23:42
 * this.$http.getBusinessPollingOne.call(this, {data: {token: _this.token}}).then(data => {
 *  // 接口成功 有id
 *  if (data.status === 1) {
 *    this.is_show_refresh_bar = true
 *  } else {
 *    this.is_show_refresh_bar = false
 *  }
 * })
 * getBusinessPollingOne->在index.js中定义的接口key
 * 传入的第二个参数中 {data: {}, method: 'post', loadTitle: '', loadMask: false, hideLoading: true},提供fly四个方法（request、all、get、post）
 * then函数中可以使用this
 */
import ApiMap from './index'

function isType (o) {
  return Object.prototype.toString.call(o)
}

let loading = {
  title: '',
  mask: true,
  hideLoading: false
}

let Fly = null
if (window) {
  Fly = require('flyio/dist/npm/fly')
} else {
  Fly = require('flyio/dist/npm/wx')
}

const request = new Fly()

// 添加请求拦截器
request.interceptors.request.use((request) => {
  // 给所有请求添加自定义header
  // request.headers['X-Tag'] = 'flyio'
  // 打印出请求体
  // console.log(request.body)
  // 终止请求
  // var err=new Error("xxx")
  // err.request=request
  // return Promise.reject(new Error(""))
  // 可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
  if (!loading.hideLoading) {
		// uni.showLoading()
    uni.showLoading({
      title: loading.title,
      // 保证有层透明遮罩，防止加载中操作其它
      mask: loading.mask
    })
  }
  return request
})

// status状态处理：
// 9--登陆失效

// 添加响应拦截器，响应拦截器会在then/catch处理之前执行
request.interceptors.response.use(
  (response, promise) => {
    let res = response.data
    // 只将请求结果的data字段返回
    uni.hideLoading()
    // 状态判断
    if (res.status === 9) {
      // 从新登陆
      uni.navigateTo({
        url: '/pages/packageA/before_login/index'
      })
      uni.showToast({
        title: res.message || '网络繁忙！',
        icon: 'loading',
        duration: 2000,
        mask: true
      })
      // 此处打断页面内部的then-resolve函数
      return promise.reject(res)
    } else {
      return promise.resolve(res)
    }
  },
  (err, promise) => {
    // 发生网络错误后会走到这里
    // return Promise.resolve("ssss")
    console.log('Error', err.message)
    uni.hideLoading()
    uni.showToast({
      title: err.message || '网络繁忙！',
      icon: 'loading',
      duration: 2000,
      mask: true
    })
    return promise.reject(err)
  }
)

function http (options) {
  // 通过key取url值，为空则返回
  let url = ApiMap[options.key] || null
  if (!url) {
    throw new Error('api/index.js: ' + url + 'undefined')
  }
  let method = options.method || 'get'
  let data = options.data || {}
  // 设置loading
  if (options.loadTitle) loading.title = options.loadTitle
  if (options.loadMask) loading.mask = options.loadMask
  if (options.hideLoading) loading.hideLoading = options.hideLoading

  // ajax不展示loading设置
  if (method === 'all') {
    if (isType(data) === '[object Array]') {
      return request.all(data)
    } else {
      throw new Error('all需要传入data为数组')
    }
  } else if (method === 'request') {
    return request.request(url, data)
  } if (method === 'get') {
    return request.get(url, data)
  } else {
    return request.post(url, data)
  }
}

let api = {}

function createApi (key) {
  api[key] = function (options) {
    options = options || {}
    options.key = key
    return http(options)
  }
}

for (let key in ApiMap) {
  if (ApiMap.hasOwnProperty(key)) {
    createApi(key)
  }
}

export default api
