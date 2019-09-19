// 此种直接写死域名地址，不走nginx代理的方式
// 开发环境
var host = 'https://devyd.molbase.cn'
// 线上
if (process.env.NODE_ENV === 'production') {
	host = 'https://xcx-api.molbase.com'
}
// 下面的地址配合云端 Demo 工作
export const service = {
  host: `${host}`,
  // 套餐列表
  getPackageList: `${host}/xcx/secretary/getPackageList`
}

export default service
