## 仿饿了么学习react

### 关于适配传送门

- [分享手淘过年项目中采用到的前端技术](https://www.w3cplus.com/css/taobao-2018-year.html "分享手淘过年项目中采用到的前端技术")

- [如何在Vue项目中使用vw实现移动端适配](https://www.w3cplus.com/css/taobao-2018-year.html "如何在Vue项目中使用vw实现移动端适配")


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

### react

### react异步组件

### 路由

### react-redux

### webpack





<!-- ![Alt text](http://www.izhangbo.cn/wp-content/themes/minty/img/logo.png "Optional title") -->