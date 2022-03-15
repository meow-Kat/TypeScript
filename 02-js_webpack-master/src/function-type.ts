// TS 成員類型 ( 公開、私有、保護 )

class UserInfomation{
    // 沒有就是 public
    name: string = 'Meow'
    // 私有 開發階段降低給別人使用的機率
    private age: number = 20
    // protected 除了自己本身跟繼承者其他都不能訪問
    protected text: string = 'hello'

    // 不希望操作和修改又希望可以被看到
    getAge() {
        return this.age
    }

}

const uInfo = new UserInfomation()
uInfo.name
// uInfo.age 這樣無效

// protected 繼承
class StreamerInformation extends UserInfomation {
    hello() {
        console.log(this.text);
    }
}
const sInfo = new StreamerInformation()
console.log(sInfo.getAge());

// JS 私有寫法 (2020)

// class PrvateTest {
//     #name: string = 'Meow'
//     getName() {
//         // 呼叫要加 # 字號
//         return this.#name
//     }
// }

// const u = new PrvateTest()
// console.log(u);
