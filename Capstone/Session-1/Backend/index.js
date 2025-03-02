const express=require('express');
const dotenv=require('dotenv');
const cors=require('cors');
const connectDB=require('./config/db');

dotenv.config();

const app=express();
app.use(express.json());

app.use(cors()); //permission for frontend

connectDB();

app.use('/api/user',require('./routes/userroutes'));
//app.use('/api/cabs',require('./routes/cabroutes'));

const PORT=process.env.PORT;

app.listen(PORT,()=>console.log(`Server is Running and up! on PORT: ${PORT}`));