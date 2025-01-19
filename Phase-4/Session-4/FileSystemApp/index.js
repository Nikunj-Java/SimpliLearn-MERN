const fs= require('fs');

console.log("Reading File System Application");

fs.readFile('example.txt','utf-8',(err,data)=>{

    if(err){
        return console.log(err);
    }else{
        console.log(data);
    }
});