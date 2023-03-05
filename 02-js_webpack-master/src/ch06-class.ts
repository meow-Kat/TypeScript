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


// implement 與 interface
// 如果做個會員系統需要以上面的為基礎，至少要包含的功能、屬性
interface OBJ {
    name:string
}
const obj: OBJ = { name:'' }
interface UserInterface {
    id: number
    name: string
    age: number
    address: string
    // 會員功能
    // add 需要接收參數
    add: (data: any) => void     // 不會有回傳的功能
    update: (id: number) => boolean   // 是否更新成功
    delete: (id: number) => boolean   // 是否刪除成功
} 

// 建立一個 User 的功能但要增加直播的功能
class LiveUser implements UserInterface {
    // 基本的功能
    id: number
    name: string
    age: number
    address: string

    add(data: any) {}
    update(id: number) {
        // ...
        return true
    }
    delete(id: number) {
        // ...
        return true
    }

    // 額外的功能
    startLive() {}
    endLive() {}
}

// 建立一個 User 的功能但要增加影片的功能
class VideoUser implements UserInterface {
    // 基本的功能
    id: number
    name: string
    age: number
    address: string

    add(data: any) {}
    update(id: number) {
        // ...
        return true
    }
    delete(id: number) {
        // ...
        return true
    }

    // 額外的功能
    postVideo() {}
    deleteVideo() {}
}


// class 與 class 之間的 extends 而不是和 interface 之間的關係
// 基本 extends 寫法
class Animal {
    name: string
    run() {
        console.log('run...');
    }
}

class Dog extends Animal {
    // 覆蓋 run 功能
    run() {
        console.log('dog run...');
    }
}
class Cat extends Animal {}

const d1 = new Dog()
const c1 = new Cat()

// d1 c1 因為繼承 Animal 本身自帶 run
d1.run()
d1.run()


// 帶有 constructor super extends 寫法
class Machine {
    name: string
    constructor (name1: string) {
        this.name = name1
    }
    run() {
        console.log('run...', this.name);
    }
}

class Bicycle extends Machine {
    run() {
        // 需要先跑一次原本的 run() 再跑覆蓋後的 run()
        super.run()
        console.log('run...', this.name);
    }
}

const b1 = new Bicycle('ddd1')

d1.run()

// 抽象類別 abstract 除了約束繼承者外還要提供功能，interface 只有約束的功能而已
// abstract 不能被 new，只能被繼承
abstract class Atom {
    run() {
        console.log('run...');
    }
    // 約束的 function
    abstract hello(): void
}

class Carbon extends Atom {
    // 必須實作 hello()
    hello(){

    }
}

const c2 = new Carbon
c2.run()
c2.hello()




// 成員類型 (公開、私有、保護)
// public private protected
class UserInfo1 {
    public name: string = 'Meow'
}
const uInfo = new UserInfo1()
// 如果 name 是 private uInfo.name 會不成立
uInfo.name

// private protected 都無法從外面被訪問
class UserInfo2 {
    // protected 只能被繼承者訪問 private 不能
    protected name: string = 'Meow'
    // 若希望不被操作修改但又要可以被外部訪問
    getName() {
        return this.name
    }
}

class StreamerInformation extends UserInfo2 {
    hello() {
        console.log(this.name)
    }
}
const sInfo = new StreamerInformation()
sInfo.hello()
console.log(sInfo.getName())


// JS 原生私有寫法 2020 ( TS 轉成 JS 並沒有成員類型 )
class UserInfo3 {
    // 這裡要注意 tsconfig.json 其中 target 要設定成 es6 才不會有問題
    #name = 'Meow'
    getName() {
        return this.#name   // 這裡也要 # 號
    }
}

const u = new UserInfo3
console.log(u);


// static 靜態 ( 可被共用 )
class Bank {
    // 加入 private 防止被外部修改金額
    private static balance: number = 1000
    static withdraw(money: number) {
        if(this.balance <= 0) return
        this.balance -= money
    }
    // 只有 static 可以呼叫 static 變數
    static getBalance() {
        return this.balance
    }
}
// 使用 static 後不用 new 就可以直接操作

// User A 領錢
function userAWithraw(money:number) {
    Bank.withdraw(money)
    console.log(Bank.getBalance());
}
// User B 領錢
function userBWithraw(money:number) {
    Bank.withdraw(money)
    console.log(Bank.getBalance());
}

userAWithraw(200)
userBWithraw(500)

// this
class CarInfo {
    // 目前的 this 是這個 class 本身，94 執行這個方法還有對象是誰
    title: string = '貓貓'
    constructor() {
        // this.title = ''
    }
    // 這裡綁到 prototype 全域共用
    hello() {
        console.log(this.title);
    }
    // 這裡每個 new 都會產生，記憶體負擔
    hello1 = () => {
        console.log(this.title);
    }
}

const carInfo = new CarInfo()
carInfo.title = 'Meow'
// 這裡的 title 就變成 Meow
carInfo.hello()

const hello2 = carInfo.hello
// this = global(window) 目前的 this 是 global
hello2()

