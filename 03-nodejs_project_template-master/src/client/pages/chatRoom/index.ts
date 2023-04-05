import "./index.css";

import { io } from 'socket.io-client'    // 引入 client 的 package

import { name } from "@/utils";

console.log("client side chatroom page", name);


// 建立連接到 node sever
const clientIo = io()
clientIo.on('join', msg => {
    console.log('msg');
})
