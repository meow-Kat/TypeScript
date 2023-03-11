// 可使用原本 js 的寫法，或加入型態的寫法 ( 推薦不加類型 )，TS 會自動判別
let num1 = 999

// 這邊會錯，因為只能取 number 類型
// num1 = 'str' 

// 如果一開始沒有值，就加入類型
let num2:number
num2 = 100

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
let obj1 ={
    name:'Meow',
    age:999
}

let obj2: { name:string, age:number }
obj2 = {
    name:'Cat',
    age: 3 // 這邊是 null 或 undifind 可以接受，這邊要調整 調整要在 tsconfig.json 設定
}

// 先宣告後使用，age? 問號是這個項目有或沒有都可以被接受
let obj3: { name:string, age?:number }
obj3 = {
    name:'Cat Meow',
}


// unknown，比較安全的 any
let name3:unknown = 'Meow'
name3 = 999 // 不會報錯基於比較安全的 any

// 斷言 
let name4:unknown = 'Cat'
let name5 = name4 as string // 原本的資料是 unknow 要轉為其他的型別
// 斷言應用
async function getData() {
    // 製作假的資料傳遞 jsonplaceholder 拿資料
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await res.json() as { userId: number, id: number, title:string, completed:boolean } // 斷言的應用
    console.log(data);
}
getData()

// any 與 unknown
// 直播狀態
const liveStatus = false
function getLiveName() {
    let liveName: unknown
    if (liveStatus) {
        liveName = 'Meow Live'
    }else{
        liveName = null
    }
    return liveName
}

const result = getLiveName()
// 類型檢查
if (typeof result === 'string') {
    result.split('')
}


// union 與 never
// union，多種類型 94 union 表達方式
const arr7: (string | boolean)[] = []
arr7.push(false)
arr7.push('')

let liveName: string | number   // union 
liveName = 'Cat'
liveName = 99
// liveName = false // 不能為 string | number 以外

// never 永遠不會發生的類型
// if (typeof liveName === 'string') {  // 無法變成 string，因為在 105 行已宣告只能 string | number 類型
//     liveName.split()
// }

// 強制斷言
let liveName2 = 999
// 如果要強制轉型，需要先變成 unknown 再轉成需要的類型
let liveName3 = liveName2 as unknown as string
// export {};