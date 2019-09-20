# uni-test系统

# uni-test

> The uni project of haoming

## Build Setup

``` bash
# install dependencies
yarn

# serve
HbuilderX -> 运行

# 注意！
全局引入组件、过滤器有问题，只能在当前页面中引入。
图标使用了iconfont。使用HbuilderX运行项目。

# 使用HbuilderX打包
打包时候需要手动修改dev.scss中 $img-url为线上地址，此处是为了处理使用到的背景图片，在上线之后的域名问题。uni在开发时不能使用本地背景图，使用style-img.vue替换。
image引入的图片，请使用img.vue组件。
设置背景图：
1.背景图样式请都写在test.scss中。
2.本地使用dev-img。已经上线的图片，在下次更改代码时候替换为pro-img（是为了让之前上线的图片，与当前本地开发图片都能展示）。
3.图片上传图片服务器后，删除本地static中的图片。

# 使用HbuilderX运行、发行打包
设置微信开发者--安全--服务端口开启
```
### 目录结构
```bash
├── common                   # 基本配置
│   ├── api                  # 接口
│   ├── controllers          # 全局混入、注册插件
│   ├── css                  # 本地静态资源
│   ├── filters              # 过滤器
│   ├── utils.js             # 通用函数
├── components               # 业务通用组件
├── pages                    # 页面
│   ├── index                # 首页
│   ├── index                # 首页
├── static                   # 图片
├── App.vue                  # app页面
├── main.js                  # 入口文件
├── vue.config.js            # 打包信息
└── package.json
.
.
```
