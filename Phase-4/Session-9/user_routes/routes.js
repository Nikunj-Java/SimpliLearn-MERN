const express=require('express');

const  {addUser, getAllUsers, getUserById}=require('../user_controller/controller');

const router=express.Router();

//http://www.localhost:4000/api/user
router.route("/").get(getAllUsers).post(addUser);

router.route('/:id').get(getUserById)


module.exports=router