// extends 一般功能

// // 繼承
// interface A {
//     name:string
// }
// // B 擴充 A 功能
// interface B extends A {}

// const b: B = { name: ''}

// // class 繼承原本變數或 fun，可透過 super 或 this 方式獲取裡面訊息
// class AA {}
// class BB extends AA {}

// extends 條件判斷功能，? 左邊類型是不是 string，可以就給 string 不能就給 number
// type T1 = string extends string ? string : number
// const a: T1 = 'ss'

// interface C { name: string }
// interface D { name: string, age: number }
// // 這兩個 interface 示獨立介面，多條件會先被滿足
// type T3 = D extends C ? string : number

// 基本泛型用法
// type TT1 = 'Meow' extends 'Meow' ? string : number
// type TT2<T> = T extends 'Cat' ? T : number
// type res = TT2<'Cat'>

// Union 泛型
// type TT2 = 'Meow' | 'Meow2' extends 'Meow' ? string : number

// type TT3<T> = T extends 'Meow' ? string : number
// type R1 = TT3<'Meow' | 'Meow2'> // 這邊會跑兩次蒐集起來結果

// never 是所有類型子類別
// type N1 = never extends 'Meow' ? string : number
// type N2<T> = T extends 'Meow' ? string : number
// never 被當成空的 union，泛型要小心
// type R3 = N2<never>

// 使用 [] 情況下，會把 <> 內的資料看成一個物件，可以保有 TT4 操作而不是 Union 的結果
type TT4<T> = [T] extends ['Meow'] ? string : number
type R2 = TT4<'Meow' | 'Cat'>