
function findMissingArray(arr){
    const n=arr.length+1;
    const expectedSum=(n*(n+1))/2    //sum of first n natural numbers
    const actualSum=arr.reduce((acc,cur)=>acc+cur,0); //sum of all elements in the aaray

    return expectedSum-actualSum;
}



const array=[1,2,3,4,6,7,8];
console.log(findMissingArray(array))
