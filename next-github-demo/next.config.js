const webpack = require('webpack')
const withCss = require('@zeit/next-css') // css加载功能 
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer')
const config = require('./config')


// 常用配置
const configs = {
  // 编译文件的输出目录
  distDir: 'dest',
  // 是否给每个路由生成 Etag 进行缓存验证用的
  generateEtags: false,
  // 页面内容缓存配置
  onDemandEntries: {
    // 内容在内存中缓存的时长（ms）
    maxInactiveAge: 25 * 1000,
    // 同时缓存多少个页面
    pagesBufferLength: 2
  },
  // 在 pages 目录下哪种后悔的文件会被认为是页面
  pageExtensions: ['jsx', 'js'],
  // 配置 buildId 一般不做修改
  generateBuildId: async () => {
    if (process.env.YOUR_BUILD_ID) {
      return process.env.YOUR_BUILD_ID
    }
    // 返回 null 使用默认的 unique id
    return null
  },
  // 手动修改 webpack config
  webpack(config, options) {
    return config
  },
  // 修改 webpackDevMiddleware 配置
  webpackDevMiddleware: config => {
    return config
  },
  // 可以在页面上通过 process.env.customkey 获取 value
  env: {
    customKey: 'value'
  },
  // 下面两个要通过 ’next/config' 来读取
  // 只有在服务端渲染时候才会获取的配置
  serverRuntimeConfig: {
    mySecret: 'secret',
    secondSecret: process.env.SECOND_SECRET
  },
  // 在服务端渲染和客户端渲染都可获取的配置
  publicRuntimeConfig: {
    staticFolder: '/static'
  }
}


if (typeof require !== 'undefined') {
  require.extensions['.css'] = file => {}
}

module.exports = withBundleAnalyzer(withCss({
  webpack(config) {
    config.plugins.push(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/))
    return config
  },
  // distDir: 'dest'
  publicRuntimeConfig: {
    GITHUB_OAUTH_URL: config.GITHUB_OAUTH_URL,
    OAUTH_URL: config.OAUTH_URL
  },
  analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'static',
      reportFilename: '../bundles/server.html'
    },
    browser: {
      analyzerMode: 'static',
      reportFilename: '../bundles/client.html'
    }
  }
}))