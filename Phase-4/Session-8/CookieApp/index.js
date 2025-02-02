const express=require('express');
const cookieParsor=require('cookie-parser');

const app=express();

//Middlewear
app.use(express.json());
app.use(cookieParsor());

app.post('/set-cookie',(req,res)=>{
    const {username,password}=req.body;
    if(!username || !password){
        return res.status(400).json({error:'Username and Password is required!'});
    }

    res.cookie('username',username,{maxAge:60000,httpOnly:true});
    res.cookie('password',password,{maxAge:60000,httpOnly:true});

    res.json({message:'Cookie is set successfully!',username,password});
})

app.get('/get-cookie',(req,res)=>{
    const {username,password}=req.cookies;
    
    if(!req.cookies){
        return res.json({message:'user is looged out!'});
    }else{
        if(!username || !password){
            return res.json({message:'No cookie  found!'});
        }
    
        res.json({username,password});
    }

});

app.get('/clear-cookie',(req,res)=>{
     res.clearCookie('username');
     res.clearCookie('password');

     res.json({message:'cookies cleared succesfully!'});

});

app.listen(3000,()=>{
    console.log('serevr is runing and up! onport no:3000');
});
