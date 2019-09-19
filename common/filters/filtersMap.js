// vue过滤器只直接 {{}}
// 所以别的情况下就用这个
/**
 * noValToFlag -> '0,00' == > -- /flag || '' == > -- /flag
 * boolean -> 把字符串转化为数字
 * formatMoney -> 格式化金额  1000 => 1,000
 * moneyToNumber -> 100,299 => 100299
 * empty -> 是否空字符串
 * removeIP -> 去掉url上的协议
 * parseInt -> 10进制解析
 * capitalize -> 0->转换为''
 */

var map = {}

map.prjColorType = function (type) {
  return {
    A: 'blue',
    F: 'orange',
    H: 'purple'
  }[type]
}

// '0,00' == > -- /flag
// '' == > -- /flag
map.noValToFlag = function (val, flag) {
  if (!val || parseFloat(val) === 0) {
    val = ''
  }
  return val || (flag || '--')
}

// 把字符串转化为数字
map.boolean = function (val) {
  return parseInt(val || '')
}

// 格式化金额  1000 => 1,000
map.formatMoney = function (val) {
  if (!val) return
  return val.toString().replace(/(\d)(?=(\d{3})+($|\.))/g, '$1,')
}

// 100,299 => 100299
map.moneyToNumber = function (val) {
  return parseFloat(val.replace(',', ''))
}

// 充值状态
let rechargeStatus = {
  1: '处理中',
  2: '成功',
  3: '失败'
}
map.rechargeStatus = function (val) {
  return rechargeStatus[val] || ''
}

// 是否空字符串
map.empty = function (val) {
  return !val ? 0 : val
}

// 去掉url上的协议
map.removeIP = function (url) {
  url = url || ''
  return url.replace(/^http(s)?:/, '')
}

// 10进制解析
map.parseInt = function (strNumber) {
  return parseInt(strNumber, 10)
}

// 0->转换为空
map.capitalize = function (value) {
	debugger
  if (!value) return ''
}

export default map
