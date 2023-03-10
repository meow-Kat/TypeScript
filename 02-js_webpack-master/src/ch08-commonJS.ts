// CommonJs -> Nodejs 開發，開發者社群建立的模組化開發方式
// webpack 或其他打包工具，可以幫忙打包 CommonJs 混和 CommonJS 和 ES Modules
// 如果要開發 NPM 安裝包，如果用到比較舊的 library，用 CommonJs 開發

// export 單個變數

const userName1 = 'Meow'

// module.exports = userName1  // 輸出

const age1 = 99

const KevinMeow = 'KevinMeow'

// 以物件方式輸出
module.exports = {
    userName: userName1,
    age: age1,
    // 同名可以只寫一個就好
    KevinMeow
}