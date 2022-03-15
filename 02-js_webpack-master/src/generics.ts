// 泛型，Type 使用的時候決定什麼類型
// T = Type                             返回 T 類型的東西
function hellow<T, U>(text: T, text2: U): T {
    // 這邊的 data 有可能 undifind，所以要給類型，return才能呼叫
    let data: T = text
    let data2: U = text2

    console.log(text, text2);

    return data
}

hellow<string, number>('Meow', 33)
hellow<number, boolean>(2, true)


// Interface 泛型

// function 部分
interface Card<T>{
    title: string
    desc: T
}
function printCardInfo<TT> (desc:TT): Card<TT> {
    const data: Card<TT> = {
        title: 'Meow',
        desc
    }
    return data
}
// 調用方法，傳入 number 後 TT 變成 number，Card 的 T 也會因為 TT 而變成 number
console.log(printCardInfo<number>(9999));

// class 部分
interface CarProps<T> {
    name: T
}
class Car<TT> implements CarProps<TT>{
    name: TT;
    constructor(value: TT){
        this.name = value
    }
}
const car = new Car<string>('Meow car')