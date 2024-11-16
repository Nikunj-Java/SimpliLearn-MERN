const numbers=[1,2,3,4,5];

//using reduce we will sum all the number
const sum=numbers.reduce((accumulator,currentvalue)=>{
    return accumulator+currentvalue;
},0); //0 is th initia; value for accumulator

console.log(sum);

//acc=0,curr=1    ----->sum=0+1=1
//acc=1,curr=2    ----->sum=2+1=3
//acc=3,curr=3    ----->sum=3+3=6
//acc=6,curr=4    ----->sum=6+4=10
//acc=10,curr=5    ----->sum=10+5=15