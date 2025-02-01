const express=require('express');
const app=express();
const port=3000;
app.get('/',(req,res)=>{
    res.send('Hello Server!.\n Welcome to Express.js') 
});

app.listen(port,()=>{
    console.log(`Express App is Running and LIVE on Port: ${port}`);
});