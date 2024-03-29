import devServer from "@/server/dev";
import prodServer from "@/server/prod";
import express from "express";    // node.js 後端框架

import { Server } from 'socket.io'  // 引入 socket.io
import http from 'http';
// 引入 UserService
import  UserService from "@/service/UserService"
// 引入 momentJS
import moment from "moment"


import { name } from "@/utils";

const port = 3000;
// 啟動後端框架拿到內容
const app = express();
// 改造 http
const server = http.createServer(app)
const io = new Server(server)   // server 端

const userService = new UserService()

// 監測連接
io.on('connection', socket => {
  // join 的頻道 ↓      ↓ 發送訊息
  // socket.emit('join', 'welcome')

  socket.emit('userID', socket.id)

  socket.on('join', ({ userName, roomName}: { userName:string, roomName: string }) => {
    const userData = userService.userDataInfoHandler(
      socket.id,
      userName,
      roomName
    )

    // 區分聊天室房間，socket 的用戶加入某個空間
    socket.join(userData.roomName)

    userService.addUser(userData)

    // 把訊息方送到某個空間，整合下方訊息提示
    // broadcast 的方法是指廣播給其他人看自己看不到
    socket.broadcast.to(userData.roomName).emit('join', `${userName} 加入 ${roomName} 聊天室`)
    // join msg
    // io.emit('join', `${userName} 加入 ${roomName} 聊天室`)
  })

  // 後端收到前端送出的文字再送到前端去確保有進後端
  socket.on('chat', msg => {
    // 使用 UTC + 0 的時間對應其他國家使用者的時間 
    // 在拿到訊息時拿到時間
    const time = moment.utc()

    // 在 terminal 會收到文字
    // console.log('server:' + msg);
    // emit 頻道
    // io.emit('chat', msg)
    // 改寫上面的，並且收到同個房間的訊息
    const userData = userService.getUser(socket.id)
    if(userData) {
      io.to(userData.roomName).emit('chat', { userData, msg, time })
    }
  })

  // 斷開連結事件
  socket.on('disconnect', () => {
    const userData = userService.getUser(socket.id)
    const userName = userData?.userName
    if(userName) {
      // 改寫 io.emit('leave', `${userData.userName}離開聊天室`)
      socket.broadcast.to(userData.roomName).emit('leave', `${userData.userName} 離開 ${userData.roomName} 聊天室`)
    }
    userService.removeUser(socket.id)
  })
})


// 執行npm run dev本地開發 or 執行npm run start部署後啟動線上伺服器
if (process.env.NODE_ENV === "development") {
  devServer(app);
} else {
  prodServer(app);
}

// console.log("server side", name);
// 啟動伺服器渲染在這個 port 上
server.listen(port, () => {
  console.log(`The application is running on port ${port}.`);
});
