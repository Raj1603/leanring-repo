
const button=document.getElementById("btn");
const MessageDiv=document.getElementById("message");

button.addEventListener("click",()=>{
    const InputAge=document.getElementById("age").value;
 MessageDiv.textContent = InputAge >18 ? "You are Adult": "You are not adult";

 console.log(MessageDiv);

});

