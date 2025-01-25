//we need to install express and mongoose
const express=require('express');
const mongoose=require('mongoose');

const app=express();
const PORT=3000;

//middleware
app.use(express.json());//parse JSON bodies

const mongoDBURI='mongodb://localhost:27017/simplilearn_2025';//create the database in mongodb

mongoose
.connect(mongoDBURI)
.then(()=>{
    console.log('Connected to MONGODB....!');
})
.catch((err)=>{
    console.error('Error Connecting to MongoDB! :',err.message);
})

app.listen(PORT,()=>{
    console.log(`server is running and up on http://localhost:${PORT}`);
});