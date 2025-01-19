const fs= require('fs');

console.log("Reading File System Application");

fs.readFile('file1.txt','utf-8',(err,data)=>{

    if(err){
        return console.log(err);
    }else{
        console.log(data);
    }
});

fs.readFile('file2.txt','utf-8',(err,data)=>{

    if(err){
        return console.log(err);
    }else{
        console.log(data);
    }
});

fs.readFile('file3.txt','utf-8',(err,data)=>{

    if(err){
        return console.log(err);
    }else{
        console.log(data);
    }
});