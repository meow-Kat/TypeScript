// function 基本
function get( a: number, b: string , c:boolean) {
    return a + b
}
// 這樣才不會錯
get( 99, '', true)


// 可選的參數
                    // ? 可選的意思↓，問號放第一個會有錯，TS 會叫你放在最後
function setUser(name: string, age?: string) {
    // 不加入這個 if 的話會有錯誤
    if(typeof age === 'string') {
        return age.split('')
    }
}


// 自動推斷類型 return type
function getNum() {
    return 100
}

// 自訂回傳類型
function gatName(): string {
    return ''
}


// 物件的回傳類型
type Info = {
    name: string,
    age: number
}

function createUserInfo(info: Info) {
    // 用 info. 就可以拿到需要的選項
    console.log(info.name)
    return info // 推斷出 return 的類型
}


// 假設網路延遲或 timeout ，不會回傳東西，定義回傳 never
function getUserData(): never {
    throw new Error('...')   
}

// void 類型，也不會回傳東西
function wan() {
    console.log()
}


// 建構函式 new
type CardObj = {
    name: string
}

type CardCreator = {
    // 括號裡面要寫接受麼類型的參數，如果什麼類型都可以接受就可以不用寫
    new(name: string): CardObj
    // 回傳的類型 ↑
}

function createCard(cardCreator: CardCreator) {
    return new cardCreator('Meow')
}

// return [] 避免 union 情況
function getArr() {
    // return [0,1,'Meow'] 自動推斷 union 類型
    return [0,1,'Meow'] as const
    // as const 斷言成解構陣列份別對應的類型

    /**************或是 *************/

    return [0,1,'Meow'] as [number, number, string]
}

const arr = getArr()    // 這樣沒問題
// 解構宣告會有問題，類型會有誤，每個都是 string 和 number 類型
// 72 行加入 as const就OK
const [id, age, userName] = getArr()



// function 泛型
//             ↓ 大寫 T type 的意思
function print<T>(data: T)  {
    // 同上面的類型
    let name: T
    console.log(data);
}
// 使用時再決定要傳什麼類型，例如列印的時候要印出什麼類型參數
print<string>('Meow')
print<number>(123)
print<boolean>(true)


// overload 多個一樣的名稱 function
function getData(data: string) :void
function getData(data: number) :void
/********* 以上可以省略 *********/
function getData(data: number | string) {
    console.log()
}
getData(99)
getData('')

/****** 或是以下這樣 ******/
                    // 回傳的類型 ↓
function getData1(data: string): string[]
function getData1(data: number): number
function getData1(data: Info): Info
/********* 以上可以省略 *********/
function getData1(data: unknown): unknown {
    if(typeof data === 'string') return []
    if(typeof data === 'number') return 999
    // 判斷 Info
    // return 某個 data
    return false
}
getData1('123')


// Rest 參數
// 多參數傳入
function claculate(...nums: number[]) {
    console.log(nums);
    
}
claculate(1,2,3,4,5,99,3213)    // 輸入字串就會有問題

// 多參數傳遞
function claculate1(a: number, b: number, c: number){
    console.log(a);
    console.log(b);
    console.log(c);
}
const nums1 = [1,2,3] as const
claculate1(...nums1)