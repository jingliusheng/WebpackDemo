const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //hot reload
const webpack = require('webpack'); //hot reload

module.exports = {
  mode: 'development',
  //入口文件配置项  可以是单一入口，也可以是多入口。默认值为 ./src。
  entry: {
    entry: './src/entry.js',
    //这里我们又引入了一个入口文件
    entry2: './src/entry2.js'
  },
  //出口文件配置项  在webpack2.X版本后，支持多出口配置。
  output: {
    //打包的路径位置
    path: path.resolve(__dirname, 'dist'),
    //打包的文件名称
    // filename: 'main.js'
    filename: '[name].js' //[name]的意思是根据入口文件的名称，打包成相同的名称，有几个入口文件，就可以打包出几个文件。
  },
  //模块，例如解读css、图片如何转换，压缩
  module: {},
  //插件，用于生产模板和各项功能
  plugins: [
    //hot reload
    new HtmlWebpackPlugin({
      template: './dist/index.html'
    }),
    //hot reload
    new webpack.HotModuleReplacementPlugin()

  ],
  //配置webpack开发服务功能
  devServer: {
    //设置基本目录结构
    contentBase: path.resolve(__dirname, 'dist'),
    //服务器的IP地址，可以使用IP也可以使用localhost
    host: 'localhost',
    //服务端压缩是否开启
    compress: true,
    //配置服务端口号
    port: 8080,
    // hot: true
  }
}