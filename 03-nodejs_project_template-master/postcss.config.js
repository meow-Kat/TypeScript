module.exports = {
  plugins: [
    // 壓縮 css 程式碼
    require('cssnano')({
      preset: 'default',
    }),
    // 處理 tailwindcss
    require('tailwindcss'),
    require('autoprefixer')
  ]
}