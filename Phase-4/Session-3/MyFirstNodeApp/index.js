const http=require('http')
const SERVER_PORT= 3000;
const SERVER_HOSTNAME="127.0.0.1";
const server =http.createServer((req,resp)=>{
    resp.statusCode=200;
    resp.setHeader("Content-Type","text/plain")
    resp.end("Welcome to My First Node js App")
});

server.listen(SERVER_PORT,SERVER_HOSTNAME,()=>{
    console.log(`Server is up and Running! listning to portNo ${SERVER_PORT} With Name ${SERVER_HOSTNAME}`  );
});