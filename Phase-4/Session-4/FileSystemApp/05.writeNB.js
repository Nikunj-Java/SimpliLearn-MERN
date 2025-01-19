
const fs=require('fs');
console.log('start writting files');
fs.writeFile('file1.txt','Your Text to Add to file-1.',(err)=>{
    if(err){
       return console.error("Error Writting the Data",err);
    }
    console.log("File Wtitten Successfully");
})

console.log("End.")