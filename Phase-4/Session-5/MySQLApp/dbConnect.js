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

//create table
db.query(`CREATE TABLE IF NOT EXISTS students
    ( id INT AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(100),
     email VARCHAR(100),age INT)`,(err)=>{
    if(err) throw err;
    console.log("Student Table is Created and Ready For the Use.");
});

//1. create record in the database
app.post('/students',(req,res)=>{
const {name,email,age}=req.body;
const sql='INSERT INTO students (name,email,age) VALUES (?,?,?)';
db.query(sql,[name,email,age],(err,result)=>{
    if(err) return res.status(500).json({error:err.message});
    res.status(201).json({message:'UserCreated',id:result.insertId});
});
});

//2 get all records from the database

app.get('/students',(req,res)=>{
    //const {name,email,age}=req.body;
    const sql='SELECT * FROM students';
    db.query(sql,(err,result)=>{
        if(err) return res.status(500).json({error:err.message});
        res.json(result);
    });
    });
    // GET THE USER BY ID
    //task to delete user by id
    //task to update user by id



app.listen(PORT,()=>{
    console.log(`server is running and up on http://localhost:${PORT}`);
})