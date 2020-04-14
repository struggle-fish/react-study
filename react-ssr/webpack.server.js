const path = require('path');
const base = require('./webpack.base');
const merge = require('webpack-merge');
const nodeExternal = require('webpack-node-externals');



module.exports = merge(base, {
  target: 'node', // 打包后的运行环境
  entry: './src/server/index.js',
  output: {
    path: path.resolve('build'),
    filename: 'server.js'
  },
  // 负责检查核心模块，不要打包核心模块
  externals: [nodeExternal()],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  }
});