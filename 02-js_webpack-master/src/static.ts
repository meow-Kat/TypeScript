// static 靜態 ( 可被共用 )
// 可被很多地方取用每次修改都會被影響

// static 與 public 差異，static 不用 new 就能直接操作

// 只有 static 函式可以呼叫 static 變數

class Bank {
    private static balance: number = 1000
    static withdraw(money: number){
        if(this.balance <= 0 ) return
        this.balance -= money
    }
    static getBalance(){
        return this.balance
    }
}

// Bank.balance

// 希望修改到的 balance 都是同一個，就不用 new

function userAWithraw(money:number) {
    Bank.withdraw(money)
    console.log(Bank.getBalance());
}

function userBWithraw(money:number) {
    Bank.withdraw(money)
    console.log(Bank.getBalance());
}

userAWithraw(200)
userAWithraw(500)
