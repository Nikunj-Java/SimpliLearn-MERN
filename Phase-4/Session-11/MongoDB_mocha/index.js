import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app=express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI).then(()=>console.log('Connected')).catch((err)=>{console.log(err)});


app.listen(process.env.PORT,()=>{
    console.log(`Server is running and up! on PORT No:${process.env.PORT}`)
});

//WAP for CRUD Operation in MONGO DB and Write its Test Cases