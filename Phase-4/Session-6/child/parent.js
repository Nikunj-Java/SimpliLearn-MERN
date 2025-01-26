const express=require('express');
const axios=require('axios');

const app=express();
const PORT=3000;

//middle ware
app.use(express.json());

app.get('/parent/students',async (req,res)=>{
   try {
    
    const response=await axios.get('http:localhost:5000/child/students');
    res.json(response.data);
   } catch (err) {
    //console.error(err.message);
    res.status(500).json({error:'Error Connecting to CHILD API',details:err.message});
    
   }
    
});

app.listen(PORT,()=>{
    console.log(`Parent API is Running and Up! at http://localhost:${PORT}`);
})