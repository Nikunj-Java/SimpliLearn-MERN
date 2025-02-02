const express=require('express');
const app=express();
const PORT=process.env.PORT || 3000;
const ENV=process.env.NODE_ENV || 'production';

//before you  start the app
//open cmd in the same folder and run below commands
// set PORT=4000
// set NODE_ENV=developement


app.get('/',(req,res)=>{
    res.send(`Server is Running in ${ENV} on PORT NO:${PORT} `);
});

app.listen(PORT,()=>{
    console.log(`Server is Running and Up! on PORT NO:${PORT}`);
});