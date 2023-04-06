import "./index.css";

// 其實會自動推斷類型
const nameInput = document.querySelector('#nameInput') as HTMLInputElement
const roomSelect = document.querySelector('#roomSelect') as HTMLSelectElement
const startBtn = document.querySelector('#startBtn') as HTMLButtonElement

startBtn.addEventListener('click', () => {
    const userName = nameInput.value
    const roomName = roomSelect.value

    // console.log(userName, roomName);

    location.href = `/chatRoom/chatRoom.html?user_name=${userName}&room_name=${roomName}`
    
})