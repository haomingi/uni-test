let functions  = {
	// 传入对象 返回数据拼接的字符串，适用于处理url后面参数.
	objectToString: function (obj) {
		let mess = ''
		let val = ''
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
				val = obj[key]
				mess += `${key}=${val}&`
      }
    }
		if (mess.length) {
			mess = mess.substr(0, mess.length - 1)
		}
		return '?' + mess
  }
}

export { functions }