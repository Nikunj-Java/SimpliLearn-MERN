import express from "express";
const app=express();
const port=3000;
app.get('/',(req,res)=>{
    res.send('Welcome to my Server');
});

app.listen(port,()=>{
    console.log('Server is Running and Up!')
})