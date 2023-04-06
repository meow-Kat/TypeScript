import "./index.css";

import { io } from 'socket.io-client'    // 引入 client 的 package

// 跳轉 chat room 在 url 上取得資料
const url = new URL(location.href)
const userName = url.searchParams.get('user_name')
const roomName = url.searchParams.get('room_name')

// 如果沒有 userName 或 roomName 回到 main.html
if(!userName || !roomName){
    location.href = 'main/main.html'
}

console.log(url,userName,roomName);

// 建立連接到 node sever
const clientIo = io()
clientIo.on('join', msg => {
    console.log('msg');
})
