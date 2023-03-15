const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const path = require('path');

module.exports = {
  target: 'web',
  // 入口
  entry: './src/index.ts',
  // 模式 development
  mode: 'development',
  // 出口
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.[hash].js',
  },
  // loader
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
          {
            loader: 'postcss-loader'
          }
        ],
      },
      {
        test: /\.gif/,
        type: 'asset/resource'
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader', // 用 ts-loader 編譯的 https://webpack.js.org/guides/typescript/ 有一個警告，不要使用 Common JS 輸出
        exclude: /node_modules/,
      },
    ],
  },
  // 讓 webpack 認得以下的檔案打包
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src')   // 讓 webpack 知道 @ 在幹嘛的，詳細在 tsconfig
    }
  },
  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'index.[hash].css'
    }),
    new CompressionPlugin()
  ],
  // 把 source-map 變更為 inline-source-map
  devtool: 'inline-source-map'
}
// 流程是 先用 TS 編譯成 JS 再用 webpack 打包，但如果 tsconfig moduleResolution 輸出的是 Connon JS 就會失去 tree-shake 功能
// tree-shake：沒有用到的部分不會包進 js 裡