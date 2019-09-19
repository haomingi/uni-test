/*
 * @Description: go('packageC/version/index') 需要注意跳转中switchTab不可带参数
 * @Author: haoming
 * @Date: 2019-09-03 13:40:43
 * @LastEditors: haoming
 * @LastEditTime: 2019-09-03 13:48:16
 */

let routeType = ['push', 'replace']

function isString (obj) {
	let bool = false
	if (typeof obj === 'string' && obj.charAt(0) !== '/') {
		bool = true
	}
	return bool
}

export default{
  methods: {
		// 保留当前页面，跳转到应用内的某个页面，使用uni.navigateBack可以返回到原页面。
    go (obj, type) {
      if (window) {
        // 如果是字符串，且不是以'/'说明传进来的是name
        if (isString(obj)) {
          obj = {
            name: obj
          }
        }
        // 没传值 或者 传入的值不在routeType则 默认为push(防止单词拼写错误)
        if (!type || routeType.indexOf(type) === -1) {
          type = 'push'
        }
        this.$router[type](obj)
      } else {
				if (isString(obj)) {
					obj = {
					  url: '/pages/' + obj
					}
				}
        uni.navigateTo(obj)
      }
    },
		// 关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages() 获取当前的页面栈，决定需要返回几层。
		goBack (num) {
			uni.navigateBack({
			    delta: num || 1
			});
		},
		// 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。
		switch (obj) {
			if (!obj.url) return
			if (isString(obj)) {
				obj = {
				  url: '/pages/' + obj
				}
			}
			uni.switchTab(obj)
		},
		// 关闭所有页面，打开到应用内的某个页面。
		launch (obj) {
			if (!obj.url) return
			if (isString(obj)) {
				obj = {
				  url: '/pages/' + obj
				}
			}
			uni.reLaunch(obj)
		},
		// 关闭当前页面，跳转到应用内的某个页面。
		redirect (obj) {
			if (isString(obj)) {
				obj = {
				  url: '/pages/' + obj
				}
			}
			uni.redirectTo(obj)
		}
  }
}
