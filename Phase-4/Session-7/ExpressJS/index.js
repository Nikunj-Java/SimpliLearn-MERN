const express=require('express');
const app=express();
const port=3000;

app.route('/student')
.get((req,res,next)=>{
     console.log('Get Method Called');
     res.send({message:'Get Method Callled'});
})
.post((req,res,next)=>{
    console.log('Post Method Called');
     res.send({message:'Post Method Callled'});
})

app.listen(port,()=>{
    console.log(`Express App is Running and LIVE on Port: ${port}`);
});