
let nums=[10,20,30,40,50,60,70,80,90];

let names=["Nikunj","Smita","Abhishek","Dev","Gaurav"];
//adding a data
nums.push(100);
console.log(nums);

//pop method
nums.pop();
console.log(nums);

//unshift method
nums.unshift(124);
console.log(nums);

//shift method
nums.shift();
console.log(nums);


//join two array
let array1=[1,2,3,4,5,6,7,8,9];
let array2=[30,40,50];

let newarray=array1.concat(array2);
console.log(newarray);

//slicing array
let subarray=array1.slice(0,3);
console.log(subarray);

//sort array
let sortarray=[23,10,3,56,34];
sortarray.sort();

console.log(sortarray);

