let recusrsiveFunction=function(arr,x,start,end){
    
    //base condition
    if(start >end) return false;
    //find the middle index
    let mid=Math.floor((start + end)/2);

    //compare mid with your key x;
    if(arr[mid]===x) return true;

    //if element at mid is greater than x
    //serach in left hand of mid
    if(arr[mid] > x)
        return recusrsiveFunction(arr,x,start,mid-1);
    else

        //if element at mid is smaller than x, 
        //search in the right of mid

        return recusrsiveFunction(arr,x,mid+1,end)


}


//drive method

let arr=[12,18,23,25,29,32,35,40,58,66];

let x=29;

if(recusrsiveFunction(arr,x,0,arr.length-1))
    console.log("Element Found!")
else
    console.log("Element Not Found!")