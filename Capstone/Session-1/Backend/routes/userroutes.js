const express=require('express');
const UserModel=require('../model/user.model');

const router=express.Router();
router.post('/',async(req,res)=>{
    try {
        const {name,email,username,password}=req.body;
        if(!name||!email||!username||!password){
            return res.status(403).send('All Fields Are Mendatory');
        }

        let user= await UserModel.findOne({email})
        if(user){
            return res.status(403).send({message:"Email id is already registere with us!"})
        }

        user=await UserModel.findOne({username});

        if(user){
            return res.status(403).send({message:"Username id is already registere with us!"})
        }

        const newUser=new UserModel ({name,email,username,password});
        const resp=await newUser.save();
        return res.status(201).send({message:'User Created Successfully!',data:resp});
    } catch (error) {
        console.log(error);
        res.status(500).send({message:"Some Internal Error Occured ",Error:error});
    }
});

module.exports=router;

