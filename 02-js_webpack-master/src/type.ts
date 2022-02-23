// 可使用原本 js 的寫法，或加入型態的寫法 ( 推薦不加類型 )，TS 會自動判別
let num1 = 999

// 這邊會錯，因為只能取 number 類型
// num = 'str' 

// 如果一開始沒有值，就加入類型
let num2:number;

let str1 = 'Meow'
let str2:string
str2 = 'cat'

let boo1 = false
let boo2:boolean
boo2 = true

let un1 = undefined // any 類型
let un2:undefined // undefined 類型

let n1 = null // any 類型
let n2:null // null 類型

// 避免 type 是 any，如果大量使用那就寫 js 就好了


// 陣列
const arr1 = [1,2,3] // number 的陣列
const arr2 = [1,2,'3'] // string | number 的陣列
const arr3: string[] = [] // 宣告 string 的陣列
// arr3.push(1000) // 會有問題
const arr4:Array<string> = [] // 泛型的寫法，與 arr3 一樣
const arr5:(string | boolean)[] = []
arr5.push(false) // 這邊可以運作

// Tuple 元組
// 保持類型順序的陣列，必須要宣告裡面內容物才可以
const tu1: [number, string, boolean] = [999, 'Meow', true]
// 2維陣列
const tu2:[number, number][] = [[11, 22], [33, 44]]

// 物件宣告
// let obj ={
//     name:'Meow',
//     age:999
// }

// 先宣告後使用，age? 問號是這個項目有或沒有都可以被接受
let obj:{name:string, age?:number}
obj ={
    name:'Meow',
    age: 3 // 這邊是 null 或 undifin 可以接受，這邊要調整
    // 調整後就可以了偵錯了
}