// 泛型，同東西要多種類型的操作
// T 類型的意思 ↓              return 類型 ↓ 只能 return data 因為 data = T，如果要 retuen data2 改 U 就好
function hello<T, U>(text : T, text2: U): T {
    let data: T = text
    let data2: U = text2
    console.log(text, text2)
    return data
}

hello<string, number>('Meow', 999)
hello<number, boolean>(999, true)


// 搭配 interface function
interface Card<T> {
    title: string
    desc: T
}
// return Card 泛型
function printCardInfo<TT>(desc: TT): Card<TT> {
    const data: Card<TT> = {
        title: 'Mewo',
        desc
    }
    return data
}

console.log(printCardInfo<number>(9999));   // 參數會帶到 Card 內

// 搭配 interface Class
interface CarProps<T> {
    name: T
}

class Car<TT> implements CarProps<TT> {
    name: TT
    constructor(value: TT) {
        this.name = value
    }
}
const car = new Car<string>('Meow car')
console.log(car);



// extends 用條件判斷，推斷我們想要的類型
interface A {
    name: string
}
interface B extends A {}

// 如果 B 可以賦予成 A 
type T2 = B extends A ? string : number

// 誰能滿足誰 ?
interface C { name: string }
interface D { name: string, age: number }
// C 和 D 毫無關聯，比誰佔的東西多可以滿足另外一方，D 比 C 多，所以 string
type T3 = D extends C ? string : number     // 這裡是成功


// 基本泛型用法
// type TT1 = 'Meow' extends 'Meow' ? string : number   // string
type TT1<T> = T extends 'Meow' ? string : number
type res = TT1<'Meow'>  // 直接返回 string 或 number

// Union 泛型用法
// type TT2 = 'Meow' | 'Cat' extends 'Meow' ? string : number  // number
type TT3<T> = T extends 'Meow' ? string : number
// 泛行內的東西一個一個比對返回 union 類型
type R1 = TT3<'Meow' | 'Cat'>


// Never 是所有類型都可以被繼承
// type N1 = never extends 'Meow' ? string : number
type N2<T> = T extends 'Meow' ? string : number
// 當作一個空的 union
type R3 = N2<never>

// [] 內容物整個拿去比
type TT4<T> = [T] extends ['Meow'] ? string : number    // number
type R2 = TT4<'Mrow' | 'Cat'>





// infer
// 補充 extends
//                ↓ 保證 T 有 Array 屬性
function sliceArr<T extends Array<T>>(a: T) {
    console.log(a.length);
}

// 使用 infer
// 當 T 是 Array 的類型才會成立， ↓ 再判斷這裡面的類型是什麼，用 P 裝起來
type TT5<T> = T extends Array<infer P> ? P : never
type R5 = TT5<['Meow', 5]>   // 傳入陣列

// function 用法
// T 是一個參數的 function return P 或 never
type ParamType<T> = T extends (param1: infer P) => any ? P : never

type R6 = ParamType<(a: number) => void>

interface UserCard { name: string }
type R7 = ParamType<(a: UserCard) => void>

type R8 = ParamType<[]>     // 丟入陣列，返回 never


// keyof
interface UserCard{
    name: string
    age: number
    cardTitle: string
    cardDesc: string
}

type T1 = keyof UserCard
// 'name' | 'age' |  'cardDesc' |  'cardTitle'
const a: T1 = 'name'    // 上面不存在的屬性就會報錯，類似 泛型的結果

// 泛型                 ↓ K 可以繼承 T，T 是 obj 用 keyof 的方式丟給 K，T 就能當成 K 裡面的 key
function getValue<T, K extends keyof T> (obj: T, key: K) : T[K] {
    return obj[key]
}