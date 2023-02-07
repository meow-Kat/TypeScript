// type 自訂義類型
let num1: number
let str1: string | boolean | number
let str2: string | boolean | boolean


// type 情境：希望 str2 可以更改後面的類型和 str1 不同，透過 type 自訂一個類型
type LiveName = string | boolean | number // 自訂的類型
let liveName: LiveName
let liveName1: LiveName
let liveName2: LiveName
// 以上 union 處理

// 以下 object 處理
type OBJ =  { name: string, age: number }
let obj: OBJ
export {};