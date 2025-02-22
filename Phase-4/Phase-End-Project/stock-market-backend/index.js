import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios'

dotenv.config();

const app=express();
const PORT= process.env.PORT || 5000;
const FINNHUB_API_KEY=process.env.FINNHUB_API_KEY;

app.use(cors());
app.use(express.json());

const FINNHUB_BASE_URL="https://finnhub.io/api/v1";

/*
let stocks=[
    {id:1, name:'Apple', symbol:'AAPL',price:175},
    {id:2, name:'Tesla', symbol:'TSLA',price:175},
    {id:3, name:'Google', symbol:'GOGL',price:175},
    {id:4, name:'Amazon', symbol:'AMZN',price:175}
];


app.get('/stocks',(req,res)=>{
    res.json(stocks);
});

app.get('/stocks/:id',(req,res)=>{
    const stock=stocks.find(s=>s.id===parseInt(req.params.id));
    if(!stock) return res.status(404).json({message:'Stock Not Found'});
    res.send(stock);
});
*/


app.get('/stocks/all',async(req,res)=>{
    const exchange=req.query.exchange || 'US' //default value

    try {
        const response=await axios.get(`${FINNHUB_BASE_URL}/stock/symbol`,{
            params:{ exchange, token:FINNHUB_API_KEY }, //mendatory
            headers:{'X-Finnhub-Token':FINNHUB_API_KEY }//mendatory
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({message:'Failed to fetch stocks list',details:error.response?.data || error.message});
    }
})

//create the same
//create an api to get stock by id

app.listen(PORT,()=>{
    console.log(`Server is running and Up! on PORT: ${PORT}`)
});