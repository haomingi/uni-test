/**
 * 项目用的比较多的filter加到这里
 * {{per.cityName || capitalize}} capitalize->就是定制的过滤器
*/

import filtersMap from './filtersMap'
let all = {}
all.install = function (vue) {
  Object.keys(filtersMap).forEach(function (k) {
    vue.filter(k, function () {
      var arr = [].slice.call(arguments)
      return filtersMap[k].apply(null, arr)
    })
  })
}

export default all
