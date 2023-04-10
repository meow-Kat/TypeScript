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

// 建立連接到 node sever
const clientIo = io()

const textInput = document.querySelector('#textInput') as HTMLInputElement
const submitBtn = document.querySelector('#submitBtn') as HTMLButtonElement
const chatBoard = document.querySelector('#chatBoard') as HTMLDivElement
const headerRoomName = document.querySelector('#headerRoomName') as HTMLParagraphElement
const backBtn = document.querySelector('#backBtn') as HTMLButtonElement


headerRoomName.innerText = roomName || ''

function msgHandler(msg: string) {
    const divBox = document.createElement('div')
    divBox.classList.add('flex', 'justify-end', 'mb-4', 'items-end')
    divBox.innerHTML = `
    <p class="text-xs text-gray-700 mr-4">00:00</p>
    <div>
        <p class="text-xs text-white mb-1 text-right">Bruce</p>
        <p
            class="mx-w-[50%] break-all bg-white px-4 py-2 rounded-bl-full rounded-br-full rounded-tl-full"
        >
            ${msg}
        </p>
    </div>
    `

    chatBoard.appendChild(divBox)
    // 發完訊息後就清空 input
    textInput.value = ''
    // 每次按發送就 scrollbar 在最下面
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
})

clientIo.on('chat', msg => {
    console.log('client:' + msg);
    msgHandler(msg)
})