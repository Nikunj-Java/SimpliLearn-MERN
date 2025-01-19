const { Console } = require('console');
const http= require('http');

const SERVER_PORT=3000;
const SERVER_HOSTNAME="127.0.0.1";

const server=http.createServer((req,res)=>{

    const method=req.method; //get, post,put
    const url=req.url //the url fired eg:'http://localhost/api/v1/demo'
    const headers=req.headers //http headers(content-type,author name)

    console.log("request Method:",method);
    console.log("request URL:",url);
    console.log("request Headers:",headers);

    res.writeHead(200, {'content-type':'text/plain'});
    res.end('Request Processed Successfully!');

});

server.listen(SERVER_PORT,()=>{
    console.log(`Server is running and up! on port no: ${SERVER_PORT}`);
})