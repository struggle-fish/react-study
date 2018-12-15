## 仿饿了么学习react

### 关于适配传送门

- [分享手淘过年项目中采用到的前端技术](https://www.w3cplus.com/css/taobao-2018-year.html "分享手淘过年项目中采用到的前端技术")

- [如何在Vue项目中使用vw实现移动端适配](https://www.w3cplus.com/css/taobao-2018-year.html "如何在Vue项目中使用vw实现移动端适配")

- [移动端适配方案：基于flexible库的成熟方案和基于vw的新方案](https://mobilesite.github.io/2018/02/05/vm-mobile-layout/ "移动端适配方案：基于flexible库的成熟方案和基于vw的新方案")



### 定位 - [高德](https://lbs.amap.com/api/javascript-api/reference/location "高德")


### @ 修饰器配置

- package.json中配置

```
// 安装 npm install babel-plugin-transform-decorators-legacy -D
"babel": {
  "presets": [
    "react-app"
  ],
  "plugins": [
    "transform-decorators-legacy"
  ]
},
```

- 配置资料参考

```
https://blockmood.github.io/2018/02/02/create-react-app%E4%B8%ADES7%E8%A3%85%E9%A5%B0%E5%99%A8%E9%85%8D%E7%BD%AE/
https://juejin.im/post/59faf3975188254eaf27ea71
https://juejin.im/post/5abb776bf265da23793c37ae
https://www.jianshu.com/p/d07ccef9f4f0
https://zhuanlan.zhihu.com/p/29151704

```
- [修饰器语法](http://es6.ruanyifeng.com/#docs/decorator "修饰器语法")

### 跨域处理
- package.json配置

```
"proxy": {
  "/api": {
    "target": "http://localhost:3333",
    "pathRewrite": {
      "^/api": ""
    },
    "changeOrigin": true
  }
},

```

### 引入svg

require.context("./file", false, /.file.js$/);
这行代码就会去 file 文件夹（不包含子目录）下面的找所有文件名以 .file.js 结尾的文件能被 require 的文件。就是说可以通过正则匹配引入相应的文件模块。

- require.context有三个参数：
  - directory：说明需要检索的目录
  - useSubdirectories：是否检索子目录
  - regExp: 匹配文件的正则表达式

```
const requireAll = requireContext => requireContext.keys().map(requireContext);
const reqSvg = require.context('./static/svg', true, /\.svg$/);
requireAll(reqSvg);

```


### react

### react异步组件

### 路由

### react-redux

### webpack





<!-- ![Alt text](http://www.izhangbo.cn/wp-content/themes/minty/img/logo.png "Optional title") -->