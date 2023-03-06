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
