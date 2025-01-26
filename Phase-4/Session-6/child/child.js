const express=require('express');
 

const app=express();
const PORT=5000;

//middle ware
app.use(express.json());

const data=[
    {id:1 , name:'Nikunj Soni', email:'Nikunj@gmail.com'},
    {id:2 , name:'Prinyank Gandhi', email:'pg@gmail.com'},
    {id:3 , name:'Rashi Agarwal', email:'ra@gmail.com'},
    {id:4 , name:'Supriya Chopade', email:'sc@gmail.com'},
];

app.get('/child/students',async (req,res)=>{
    res.json(data);
});

app.listen(PORT,()=>{
    console.log(`Child API is Running and Up! at http://localhost:${PORT}`);
})