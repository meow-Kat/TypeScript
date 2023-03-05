// 泛型，同東西要多種類型的操作
// T 類型的意思 ↓              return 類型 ↓ 只能 return data 因為 data = T，如果要 retuen U 改 U 就好
function hello<T, U>(text : T, text2: U): T {
    let data: T = text
    let data2: U = text2
    console.log(text, text2)
    return data
}

hello<string, number>('Meow', 999)
hello<number, boolean>(999, true)

