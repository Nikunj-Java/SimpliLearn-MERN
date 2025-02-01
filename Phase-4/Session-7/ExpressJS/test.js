//we need to install express and mongoose
const express=require('express');
const mongoose=require('mongoose');
const {engine}=require('express-handlebars');

const app=express();
const PORT=3000;

app.engine('hbs',engine({extname: '.hbs'}));
app.set('view engine','.hbs');
app.set('views','./views');

 

app.listen(3000,()=>{
    console.log('Server is Running and Up! on Port No : 3000');
})

const mongoDBURI='mongodb://localhost:27017/Simplilearn_2025';//create the database in mongodb

mongoose
.connect(mongoDBURI)
.then(()=>{
    console.log('Connected to MONGODB....!');
})
.catch((err)=>{
    console.error('Error Connecting to MongoDB! :',err.message);
})

 
 
//get user

app.get('/student',async(req,res)=>{

    try {
        const student= await myStudent.find();
        res.json(student);
    } catch (error) {
        //res.status(500).json({error:err.message});
        res.render('index',{title:'Handlebars Error Example',message:error.message})
    }
    
});
 

 