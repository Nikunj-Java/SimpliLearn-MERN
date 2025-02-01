const express=require('express');
const {engine}=require('express-handlebars');
const app=express();

app.engine('hbs',engine({extname: '.hbs'}));
app.set('view engine','.hbs');
app.set('views','./views');

app.get('/',(req,res)=>{
    res.render('index',{title:'Handlebars Example',message:'Hello From Handlebars!'})
})

app.listen(3000,()=>{
    console.log('Server is Running and Up! on Port No : 3000');
})