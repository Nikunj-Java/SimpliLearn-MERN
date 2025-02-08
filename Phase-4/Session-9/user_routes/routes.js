const express=require('express');

const  {addUser}=require('../user_controller/controller');

const router=express.Router();

router.route("/").post(addUser);


module.exports=router