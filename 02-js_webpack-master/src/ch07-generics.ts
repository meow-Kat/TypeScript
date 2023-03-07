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