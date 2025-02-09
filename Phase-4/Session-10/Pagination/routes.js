const express=require('express');

const ProductModel=require('./model');
const router=express.Router();
//pagination
//localhost:4000/api/product?page=3&limit=3

//WAP to get all products here
router.get("/",async(req,res,next)=>{
    //reading query parameters for pagination
    const page=parseInt(req.query.page) || 1;
    const limit=parseInt(req.query.limit) || 10
    try {
        const skip=(page-1)*limit;
        const products=await ProductModel.find().skip(skip).limit(limit);
        const totalProducts= await ProductModel.countDocuments();
        res.status(200).send({products,currentPage:page,totalPages:Math.ceil(totalProducts/limit)})
    } catch (error) {
        next(error);
    }
})
 


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



