// 在後端啟動
// 記錄使用者和房間內的內容、ID

export type UserData = {
    id: string
    userName: string
    roomName: string
}

export default class UserService {
    // 記錄使用者資訊
    private userMap: Map<string, UserData>

    constructor () {
        this.userMap = new Map()
    }

    // 可以處理使用者資料
    addUser(data: UserData) {
        this.userMap.set(data.id, data)
    }

    removeUser(id: string) {
        if(this.userMap.has(id)){
            this.userMap.delete(id)
        }
    }

    getUser(id: string) {

        if(!this.userMap.has(id)) return null

        const data = this.userMap.get(id)
        if(data) return data

        return null
    }

    userDataInfoHandler(id: string, userName: string, roomName: string): UserData {
        return {
            id,
            userName,
            roomName
        }
    }
}