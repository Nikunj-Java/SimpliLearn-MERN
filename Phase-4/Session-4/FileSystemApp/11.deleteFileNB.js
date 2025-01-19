
const fs=require('fs');
console.log('creating Directory');


const filename='MyDir2';

fs.rmdir(filename,(err)=>{
    if(err){
        return console.error("Error Deleting the Directory..!")
    }
    console.log("File Delted Successfully");
})


 
console.log("End.")