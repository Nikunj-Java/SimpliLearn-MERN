let array1=[150,75,50];

function subofarray(t,n){
    return t-n;
}

function reduce(item){
    console.log(array1.reduce(subofarray));
}

reduce();