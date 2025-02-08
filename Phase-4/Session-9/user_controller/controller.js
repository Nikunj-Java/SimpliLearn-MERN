const UserModel=require('../user_model/user');

//Register the USer
const addUser= async (req,res)=>{
    const{name,email,username,password}=req.body;
    if(!name || !email || !password || !username){
        return res.status(400).json({
            message:'Name,Email,Password,Username Fields are medatory..!!'
        })
    }

    const newUser=new UserModel({
        name,email,username,password
    });

    try {
        const resp=await newUser.save();
        res.status(201).json({
            message:'User Added Successfully',
            data:resp
        })
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}

//get all users
const getAllUsers=async(req,res)=>{
    try {
        
        const users=await UserModel.find(); //fetch all the records from Database
        res.status(200).json({
            message:'User Data Fetched Successfully!',
            data:users
        });
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}
 
//get user by id
const getUserById=async (req,res)=>{
    const {id}=req.params;
    try {
        
        const users=await UserModel.findById(id); //fetch all the records from Database
        res.status(200).json({
            message:'User Data Fetched Successfully!',
            data:users
        });
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
     
}

//delete by id

const deleteById=async (req,res)=>{
    const {id}=req.params;
    try {
        const users=await UserModel.findByIdAndDelete(id); 
        res.status(200).json({
            message:'User Deleted Successfully!',
            data:users
        });
        
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
        
    }
}

// update user by id
const updateUserById=async(req,res)=>{
    const {id}=req.params;
    try {
        
        const user=await UserModel.findByIdAndUpdate(id,req.body);
        res.status(200).json({
            message:'Data Updated Successfully',
            data:req.body
        })
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}



module.exports={addUser,getAllUsers,getUserById,deleteById,updateUserById}