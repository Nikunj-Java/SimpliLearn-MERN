
const fs=require('fs');
console.log('creating Directory');

//non blocking
const filename='MyDir2';
 fs.access(filename,(err)=>{
    if(err){
        //directory not exist
        fs.mkdir(filename,(err)=>{
            if(err)
            {
                return console.error("Error While Creating the Directory");
            }
            console.log("Directory Prepared Successfully...!");
        })
    }else{
        console.log("Directory Exist...!")
    }
 })

 
console.log("End.")