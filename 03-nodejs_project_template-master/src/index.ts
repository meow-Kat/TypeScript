import devServer from "@/server/dev";
import prodServer from "@/server/prod";
import express from "express";    // node.js 後端框架

import { Server } from 'socket.io'  // 引入 socket.io
import http from 'http';
// 引入 UserService
import { UserService } from "@/service/UserService"

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
  socket.emit('join', 'welcome')

  // 後端收到前端送出的文字再送到前端去確保有進後端
  socket.on('chat', msg => {
    // 在 terminal 會收到文字
    console.log('server:' + msg);
    // emit 頻道
    io.emit('chat', msg)
  })

})


// 執行npm run dev本地開發 or 執行npm run start部署後啟動線上伺服器
if (process.env.NODE_ENV === "development") {
  devServer(app);
} else {
  prodServer(app);
}

console.log("server side", name);
// 啟動伺服器渲染在這個 port 上
server.listen(port, () => {
  console.log(`The application is running on port ${port}.`);
});
