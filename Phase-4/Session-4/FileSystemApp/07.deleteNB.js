
const fs=require('fs');
console.log('start Deleting files');
fs.unlink('read.html',(err)=>{
    if(err){
        return console.error("Error While Deleting a file",err);
    }
    console.log("File Deleted Successfully..!");
})
console.log("End.")