const express=require('express');
const dotenv=require('dotenv');
const axios=require('axios');
dotenv.config();

const app=express();

app.use(express.json());

app.get('/weather',async(req,res)=>{
    const city=req.query.city; //get city from query parameter

    if(!city){
        return res.status(400).json({error: 'City is required'});
    }

    try {
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;
        const response=await axios.get(url);
        res.json(response.data); //sending response back to the client
        
    } catch (error) {
        res.status(500).json({error:"Failed to fetch weather Data", details: error.message});
    }
})


app.listen(process.env.PORT,()=>{
    console.log(`server is started and running on PORT: ${process.env.PORT}!`);
})

//open the postmen and use get method: http://localhost:4000/weather?city=Mumbai