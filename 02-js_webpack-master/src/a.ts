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

