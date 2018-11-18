module.exports = {

  // 单个入口
  // entry: {
  //   main: './src/2.js'
  // },

  // 单个入口 等价写法
  // entry: './src/1.js'

  // 多个入口
  // 打包出多个文件
  // entry: {
  //   first: './src/1.js',
  //   second: './src/2.js'
  // }

  // 多个入口
  // 多个文件作为一个入口，webpack 会解析两个文件的依赖后进行打包
  entry: [
    './src/1.js',
    './src/2.js'
  ]

}
