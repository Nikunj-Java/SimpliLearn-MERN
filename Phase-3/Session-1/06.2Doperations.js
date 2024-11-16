let twoDimArray=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

//1. INSERTING A NEW RECORD
twoDimArray.push([10,11,12]);
console.log("After Pushing a new row at the end: ",twoDimArray);

//2 inserting a new row  at the begining
twoDimArray.unshift([0,1,2]);
console.log("After unshifting a new row at the begining",twoDimArray);

//3 inserting a new row at a specifi index
twoDimArray.splice(2,0,[13,14,15]);
console.log("After splicing a new row at index 2 :",twoDimArray);

//inserting a new element into a specific row
twoDimArray[3].push(50);
console.log("After adding 50  to the third row:",twoDimArray);

//removing 
twoDimArray.pop();
console.log("After poping the last row:",twoDimArray);

//removing first row 
twoDimArray.shift();
console.log("After shifting the first row:",twoDimArray);

//remove specific row
twoDimArray.splice(1,1);
console.log("After splicing out row at index 1: ",twoDimArray);