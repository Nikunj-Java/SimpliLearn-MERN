const fs= require('fs');

console.log("Reading File System Application");


const file1=fs.readFileSync('file1.txt','utf-8');
console.log('File 1',file1);

const file2=fs.readFileSync('file2.txt','utf-8');
console.log('File 2',file2);

const file3=fs.readFileSync('file3.txt','utf-8');
console.log('File 3',file3);


console.log("Completed Reading Files");