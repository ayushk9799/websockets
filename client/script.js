
var socket = io();
const input =document.getElementById('message')
 const writing=document.getElementById("messages")
const button=document.getElementById("buttons")
const button2=document.getElementById("buttons2")
socket.on('connect',()=>
{
    console.log(`clieng side socket ${socket.id}`)
  })




  const options={
    method:'GET',
    url:'http://localhost:8081/hello'
  }
  button.addEventListener("click",function ()
  {
           axios.request(options).then((response)=>
           {
           writing.innerHTML=response.data;
           })
  });

  button2.addEventListener('click',send)
  function send()
    {
     socket.emit("sending",input.value)
    }
  socket.on("sendingfromserver",(value)=>
   {
      writing.innerHTML=value;
     })
  function dipslayMessage(data)
{
    document.getElementById("messages").innerHTML=data;
  }

