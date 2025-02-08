const express=require('express');
const connectDB=require('./dbConfig');
const dotenv=require('dotenv').config();
const PORT=process.env.PORT||5000;

const app=express();

connectDB();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello World!");
});

//Routing Mechnism
app.use("/api/user",require('./user_routes/routes'))

app.listen(PORT,()=>{
    console.log(`server is running and up on PORT NO: ${PORT}`);
})