import express from "express";
import http from "http";
import path from "path";
import { fileURLToPath } from 'url';
import {Server} from "socket.io"
const app= express();
const server=http.createServer(app);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname);
//  const server=new WebSocketServer({port:8080})
//  server.on('connection', (socket) => {
//     console.log('Client connected');
  
//     socket.on('message', (message) => {
//       console.log(`Received message: ${message}`);
//       socket.send(`Echo: ${message}`);
//     });
  
//     socket.on('close', () => {
//       console.log('Client disconnected');
//     });
//   });
const io= new Server(server)
io.on('connection',(socket)=>
{
    
     console.log(socket.id)
     socket.send("sending from server")
     socket.on('sending',(msg)=>
     {
        console.log(msg)
     })
     socket.emit("sendingfromserver","hi from server")
     socket.on('disconnect', function () {
        console.log('A user disconnected');
     });
})
   
     

app.get('/hello',(req,res)=>
{
   res.send("hello");
})
app.use(express.static('../client'));
app.get('/',(req,res)=>res.sendFile(path.join(__dirname,'../client/index.html')))
server.listen(8081,()=>console.log(`servr running `))


