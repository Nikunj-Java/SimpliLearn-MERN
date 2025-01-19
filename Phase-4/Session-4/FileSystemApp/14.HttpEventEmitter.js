const http=require('http');

const server=http.createServer((req,res)=>{
    res.end('Hello World!');
});

server.on('request',(req,res)=>{
    console.log(`Request Received for ${req.url}`);
});

server.listen(3000,()=>{
    console.log(`Server is running and Up! at htpp://localhost:3000`);
});

//http server uses EventEmitter to handle request, responses and connections