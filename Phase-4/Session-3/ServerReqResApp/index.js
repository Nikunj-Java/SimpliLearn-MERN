const http=require('http');
const SERVER_PORT=3000;
const SERVER_NAME="127.0.0.1";

const server=http.createServer();
server.on("request",(req,res)=>{
    const url=req.url;
    const { headers }=req;
    const userAgent= headers['user-agent'];
    if(url ==='/'){

        res.setHeader("Content-Type","text/plain")
        res.end("Welcome to Server type: Text-plain  <h1>Welcome to HTML Page Type</h1>")
    }
    if(url ==='/html'){
        res.setHeader("Content-Type","text/html")
        res.writable(200)
        res.end("<h1>Welcome to HTML Page Type</h1>")
        
    }
    if(url ==='/application'){
        res.setHeader("Content-Type","application/json")
        //res.end("<h1>Welcome to HTML Page Type</h1>")
        res.setHeader('Date', new Date());
        res.writable(200)
        res.end(JSON.stringify({
            "plateform":process.platform,
            "userAgent":userAgent,
            "date":new Date()
        }))
    }

});

server.listen(SERVER_PORT,SERVER_NAME,()=>{
    console.log("Server is running and up!");
})