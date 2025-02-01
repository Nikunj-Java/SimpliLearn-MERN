const express= require('express');
const app=express();
const path=require('path');
const PORT=3000;

app.use(express.static(path.join(__dirname,'public')));
app.get('/',(req,res,next)=>{
    res.render('index.ejs')
})
app.listen(PORT,()=>{
    console.log(`Server is Running and Up! PORT: ${PORT}`);
})