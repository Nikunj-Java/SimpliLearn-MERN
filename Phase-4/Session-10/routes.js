const express=require('express');

const ProductModel=require('./model');
const router=express.Router();
//pagination
//localhost:5000/api/products?page=3&limit=3

//WAP to get all products here



//create Soms Data
//localhost:5000/api/products/
router.post("/",async(req,res,next)=>{
    try {

        const {name,price,quantity}=req.body;
        if(!name || !price || !quantity){
            throw new Error("Name, Price, Quantity Can't be Empty!");
        }

        const newProduct= new ProductModel({name,price,quantity});

        const resp= await newProduct.save();
        res.send({message:"Data Saved Successfully!", Data: resp});
        
    } catch (error) {
        next(error);
        //or res.status(500).send({message: "Server Error",Error:error});
    }
});

module.exports=router;



