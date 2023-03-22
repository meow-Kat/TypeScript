const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const { HotModuleReplacementPlugin } = require("webpack")
const path = require('path');
// 指定兩個入口編譯
const entries = {
  'main': ['./src/client/pages/main/index.ts'],
  'chatRoom': ['./src/client/pages/chatRoom/index.ts']
}

module.exports = {
  entry: entries,
  // 決定當前執行環境
  mode: process.env.NODE_ENV,
  output: {
    // 編譯後輸出的資料夾路徑
    path: path.resolve(__dirname, 'dist'),
    // 根據入口名稱編譯 ex: main/index.sdgrdtsadds2ad.js
    filename: '[name]/index.[hash].js',
    clean: true,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            // 處理 postcss.config.js
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
        loader: "ts-loader", 
        // 指定 configFile，是希望有 tree shake 功能
        options: {
          configFile: 'tsconfigClient.json'
        } 
      }
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    // 別名處理
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  plugins: [
    // 直接編譯 main  的 html
    new HtmlWebpackPlugin({
      filename: '[name]/main.html',
      chunks: ['main'],
      template: './src/client/pages/main/index.html'
    }),
    // 直接編譯 chatRoom 的 html
    new HtmlWebpackPlugin({
      filename: '[name]/chatRoom.html',
      chunks: ['chatRoom'],
      template: './src/client/pages/chatRoom/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name]/index.[hash].css'
    }),
    new CompressionPlugin(),
    // 下面這個要搭配 middleware 熱更新(程式碼更新直接顯示到畫面上)
    new HotModuleReplacementPlugin(),
  ],
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
}