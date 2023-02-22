// 1. OOP 物件導向

// 會員功能的物件 -- CURD
// name age address

// 物件設計
class User {
    // 3. constructor 當 new 出來的時候要先做的事情
    constructor(name1: string) {
        console.log('物件建立之前...');
        this.name = name1
    }


    // 成員 ( 屬性(變數) 功能 (function) )
    name: string
    age: number
    address: string

    // 會員功能
    add() {}
    update() {}
    delete() {}
}

// 2. 基本 class 寫法與new
// 產生 3 個物件
const u1 = new User('Meow1')
const u2 = new User('Meow2')
const u3 = new User('Meow3')

// 給 name
// u1.name = 'Meow1'
// u2.name = 'Meow2'
// u3.name = 'Meow3'

console.log(u1);
console.log(u2);
console.log(u3);


