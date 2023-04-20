import "./index.css";

import { io } from 'socket.io-client'    // 引入 client 的 package

import { UserData } from '@/service/UserService'

type UserMsg = { userData: UserData, msg: string, time: number }

// 跳轉 chat room 在 url 上取得資料
const url = new URL(location.href)
const userName = url.searchParams.get('user_name')
const roomName = url.searchParams.get('room_name')

// 如果沒有 userName 或 roomName 回到 main.html
if(!userName || !roomName){
    location.href = 'main/main.html'
}

// 建立連接到 node sever
const clientIo = io()

// 加入聊天室發送
// clientIo.emit('join', `${userName} 加入聊天室` )    // 原本發送字串
clientIo.emit('join', { userName,roomName } )    // 改送物件


const textInput = document.querySelector('#textInput') as HTMLInputElement
const submitBtn = document.querySelector('#submitBtn') as HTMLButtonElement
const chatBoard = document.querySelector('#chatBoard') as HTMLDivElement
const headerRoomName = document.querySelector('#headerRoomName') as HTMLParagraphElement
const backBtn = document.querySelector('#backBtn') as HTMLButtonElement


headerRoomName.innerText = roomName || ''

let userID = ''

function msgHandler(data: UserMsg) {

    // console.log(data.time);
    const date = new Date(data.time)
    const time = `${date.getHours()}:${date.getMinutes()}`


    const divBox = document.createElement('div')
    divBox.classList.add('flex', 'mb-4', 'items-end')

    if( data.userData.id === userID) {
        divBox.classList.add('justify-end')
        divBox.innerHTML = `
        // <p class="text-xs text-gray-700 mr-4">${time}</p>
        <div>
            <p class="text-xs text-white mb-1 text-right">${data.userData.userName}</p>
            <p
                class="mx-w-[50%] break-all bg-white px-4 py-2 rounded-bl-full rounded-br-full rounded-tl-full"
            >
                ${data.msg}
            </p>
        </div>
        `
    }else{
        divBox.classList.add('justify-start')
        divBox.innerHTML = `
        <div>
            <p class="text-xs text-gray-700 mb-1">${data.userData.userName}</p>
            <p
              class="mx-w-[50%] break-all bg-gray-800 px-4 py-2 rounded-tr-full rounded-br-full rounded-tl-full text-white"
            >
            ${data.msg}
            </p>
          </div>

          <p class="text-xs text-gray-700 ml-4">${time}</p>
        `
    }
   

    chatBoard.appendChild(divBox)
    // 發完訊息後就清空 input
    textInput.value = ''
    // 每次按發送就 scrollbar 在最下面
    chatBoard.scrollTop = chatBoard.scrollHeight
}

function roomMsgHandler(msg: string) {
    const divBox = document.createElement('div')
    divBox.classList.add('flex', 'justify-center', 'mb-4', 'items-center')
    divBox.innerHTML = `<p class="text-gray-700 text-sm">${msg}</p>`

    chatBoard.appendChild(divBox)
    chatBoard.scrollTop = chatBoard.scrollHeight

}

// submitBtn 推斷類型可能是 null
submitBtn.addEventListener('click', () => {
    const textValue = textInput.value
    // 建立發送功能 chat event 到後端
    clientIo.emit('chat', textValue)
})

backBtn.addEventListener('click', () => {
    location.href = '/main/main.html'
})

clientIo.on('join', msg => {
    console.log(msg);
    roomMsgHandler(msg)
})

clientIo.on('chat', (data: UserMsg) => {
    // console.log('client:' + msg);
    msgHandler(data)
})

// 離開聊天室
clientIo.on('leave', msg => {
    roomMsgHandler(msg)
})
// 從後端傳入 ID
clientIo.on('userID', id => {
    userID = id
})