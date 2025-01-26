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

//user schema--model
const userSchema= new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    age:{type:Number,required:true},
});

const myStudent=mongoose.model('myStudent',userSchema);

//create user
app.post('/student',async(req,res)=>{
    try {
        const {name,email,age}=req.body;
        const student= new myStudent({name,email,age});
        await student.save();
        res.status(201).json({message:'student Created!',student});
    } catch (error) {
        res.status(500).json({error:err.message})
    }
});

//get user
app.get('/student',async(req,res)=>{

    try {
        const student= await myStudent.find();
        res.json(student);
    } catch (error) {
        res.status(500).json({error:err.message});
    }
    
});

//get user by id
//get user
app.get('/student/:id',async(req,res)=>{

    try {
        const { id }=req.params;
        const student= await myStudent.findById(id);
        if(!student){
            return res.status(404).json({message:'Student Not Found'});
        }
        res.json(student);
    } catch (error) {
        res.status(500).json({error:err.message});
    }
    
});
//update user by id
app.put('/student/:id',async(req,res)=>{

    try {
        const { id }=req.params;
        const {name,email,age}=req.body;
        const student= await myStudent.findByIdAndUpdate( 
            id,
            {name,email,age},
            {new:true,runValidators:true}
        );
        
        if(!student){
            return res.status(404).json({message:'Student Not Found'});
        }
        res.json({message:'Student updated!',student});
    } catch (error) {
        res.status(500).json({error:err.message});
    }
    
});
//delete user by id
//TASK: 
