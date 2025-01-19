
const fs=require('fs');
console.log('start Appending files');
fs.appendFile('file1.txt','\n here is the data appending to the existing file.',(err)=>{
    if(err){
        return console.error("Error While Appending a Data",err);
    }
    console.log("Successfully Appen the data");
})
console.log("End.")