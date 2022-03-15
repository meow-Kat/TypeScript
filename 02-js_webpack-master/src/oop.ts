// 物件導向
// 分類：會員功能 ( 物件 )
// name age address
// - 新增
// - 更新
// - 刪除

// 實作會員功能
// 物件設計圖
class User {
    constructor(name1: string){
        console.log('物件建立前...');
        this.name = name1
    }

    // 成員 ( 屬性 ( 變數 ) + 功能 ( function) )
    name:string
    age:number
    address:string

    // 會員功能
    add(){}
    update(){}
    delete(){}
}

const u1 = new User('cat')
const u2 = new User('meow')
const u3 = new User('cat meow')

// 拿到設計圖 -> 處理一下 ( constructor ) -> 再建立物件

u1.name = 'cat'
u2.name = 'meow'
u3.name = 'cat meow'

// console.log('u1', u1);
// console.log('u2', u2);
// console.log('u3', u3);

// 繼承
interface OBJ2 {
    name: string
}

const obj2: OBJ2 = { name:'' }

interface UserInterface{
    id: number
    name: string
    age: number
    address: string

    // 會員功能
    add1: (data: any) => void
    update1: (id: number) => boolean
    delete2: (id: number) => boolean 
}

// implements 希望建立 user 功能同時保有上面的會員功能 ( 簡單說就是繼承 )
// class LiveUser implements UserInterface {
//     // 約束類型
//     id: number
//     name: string
//     age: number
//     address: string

//     add1: (data: any) {}
//     update1: (id: number) {
//         // ...
//         return true
//     }
//     delete2: (id: number) {
//         // ...
//         return true
//     }
//     // 額外功能
//     postVideo() {}
//     deleteVideo(){}
// }

// Class Extends ( class 與 class 之間 )

// 通用類別
class Animal{
    name: string
    constructor (name1: string) {
        this.name = name1
    }
    run () {
        console.log('run...',this.name);
    }
}

class Dog extends Animal{
    run () {
        console.log('dog run...');
    }
}
class Cat extends Animal{
    run () {
        // super 想要覆蓋原本的方法還要調用原本的方法
        super.run()
        console.log('dog run...');
    }
}

const d1 = new Dog('Wang')
d1.run()

const c1 = new Cat('Meow')
c1.run()


// Interface 只能約束繼承者的屬性

// 抽象類別 abstract 約束繼承者外，還要提供功能，此外不提供 new
abstract class Animals{
    run () {
        console.log('run...');
    }
    abstract hellow(): void
}
class snake extends Animal{
    // 實作功能
    hellow(){

    }
}
