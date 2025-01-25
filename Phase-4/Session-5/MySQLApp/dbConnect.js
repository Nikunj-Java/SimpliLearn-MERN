const express=require('express');
const mysql=require('mysql2');


const app=express();
const PORT=3000;

//in latest express >14 version, body parser is available  in-built

//Middleware
app.use(express.json()); //parse JSON bodies
//app.use(express.urlencoded({extended:true})); //parse URL-encoded bodies

//MYSQL Connections

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Nikunj@123',
    database:'simplilearn_2025'
});

db.connect((err)=>{

    if(err){
        console.log('Error While Connecting to the Databse');
        return;
    }
    console.log('Connected to MySql Database');
    
});
