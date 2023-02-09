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



// interface 介面用法，應用到物件
interface UserCard {
    name: string
    desc: string
}
const usercard: UserCard = {
    name: '',
    desc: ''
}



// type 和 interface 擴充處理
// ---------------------- type 擴充
type Transportation = {
    name: string
}
// 擴充屬性用 &
type Car = Transportation & {
    material: string
}
type bike = Transportation

let car: Car = {
    name: '',
    material: 'metal'
}
let bike: Transportation = {
    name: ''
}
// ---------------------- interface 合併
interface Animal {
    name: string
}
// 相同東西放下面就可以擴充了
interface Animal {
    age: number
}
// 少了一個就會錯
let dog: Animal = {
    name: '',
    age: 20
}



// enum 枚舉
// 範例，如果都是用數字去表達適合使用 enum
// 0 -> 關直撥
// 1 -> 開直撥
// 2 -> 多人連線開直播

enum LiveStatus {
    'streaming' = 0,
    'closed' = 1,
    'mutiple' = 2
}
let liveStatus = 0
if( liveStatus === LiveStatus.streaming){
    // ...
}

export {};