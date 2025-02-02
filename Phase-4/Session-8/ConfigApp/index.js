const express=require('express');
const dotenv=require('dotenv');
dotenv.config();

const app=express();


app.get('/',(req,res)=>{
    res.json({environment: process.env.NODE_ENV, port: process.env.PORT,api_key:process.env.API_KEY})
});

app.listen(process.env.PORT,()=>{
    console.log(`server is running and up on port: ${process.env.NODE_ENV}`);
})