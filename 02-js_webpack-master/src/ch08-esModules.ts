// ES 模組推出後所制定的標準
// webpack 或其他打包工具，可以幫忙打包 CommonJs 混和 CommonJS 和 ES Modules
// 比較推薦用 ES 模組開發

// 這樣就可以直接輸出
export const userName = 'Meow'  
export const age = 99
export const address = '503'

// 預設輸出
// export default userName     // 預設輸出 userName

// 多個輸出
const userName1 = 'Meow'  
const age1 = 99
const address1 = '503'

export default {
    userName1,
    age1,
    address1
}