
const fs=require('fs');
console.log('creating Directory');

//blocking
const filename='MyDir1';
if(!fs.existsSync(filename)){
    fs.mkdir(filename,(err)=>{
        if(err)
        {
            return console.error("Error While Creating the Directory");
        }
        console.log("Directory Prepared Successfully...!");
    })
}else{
    console.log("Directory Already Exist...!");
}

 
console.log("End.")