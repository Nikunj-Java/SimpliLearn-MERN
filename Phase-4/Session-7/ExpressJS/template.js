const express=require('express');
const app=express();

app.set('view engine','pug');

app.get('/',(req,res)=>{
    res.render('index',{title:'Hey',message:'Hello Everyone!'})
})

app.listen(3000,()=>{
    console.log(`server is running and up on PORT:3000`);
});