
const fs=require('fs');
console.log('creating Directory');

fs.mkdir('MyDir',(err)=>{
    if(err)
    {
        return console.error("Error While Creating the Directory");
    }
    console.log("Directory Prepared Successfully...!");
})
 
console.log("End.")