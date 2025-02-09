const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();

const app=express();
app.use(express.json());

//db.connect();

mongoose.connect(process.env.MONGODB_URI)
.then(()=> console.log("Connected!"))
.catch((err)=>console.log(err));

app.use("/api/product",require('./routes'));

//global error handling
app.use((err,req,res,next)=>{
    res.status(500).json({error:'Opps Something Went Wrong!'})
    console.log(err);
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is running and Up on PORT NO: ${process.env.PORT}`);
})