const express=require('express');

const  {addUser, getAllUsers, getUserById, deleteById, updateUserById}=require('../user_controller/controller');

const router=express.Router();

//http://www.localhost:4000/api/user
router.route("/").get(getAllUsers).post(addUser);

router.route('/:id').get(getUserById).delete(deleteById).put(updateUserById)


module.exports=router