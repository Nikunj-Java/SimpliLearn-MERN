const express=require('express');
const app=express();


app.disable('x-powered-by');

app.get('/',(req,res)=>{
    res.send('Hello!, welcome to Express! ');
});

app.listen(3000,()=>{
    console.log('Server is Running and Up! on PORT NO:3000');
});