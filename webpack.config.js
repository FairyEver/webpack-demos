const path = require('path')

module.exports = {

  // 单输入 单输出
  // output: {
  //   path: path.resolve(__dirname, 'dist'),
  //   filename: 'bundle.js'
  // }

  // 多入口 多输出
  // entry: {
  //   1: './src/1.js',
  //   2: './src/2.js',
  // },
  // output: {
  //   filename: '[name].js',
  //   path: path.resolve(__dirname, 'dist')
  // }

  // 输出带哈希值
  output: {
    filename: '[name]-[hash].js',
    path: path.resolve(__dirname, 'dist'),
  }

}
