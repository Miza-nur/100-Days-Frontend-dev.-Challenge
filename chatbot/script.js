const sendInputbtn =document.querySelector(".chat-input span");
const chatInput=document.querySelector(".chat-input textarea")

let useMessage;
const handChat=()=>{
    useMessage=chatInput.value.trim();
    console.log(useMessage);
    chatInput.value='';
}


sendInputbtn.addEventListener("click",handChat)