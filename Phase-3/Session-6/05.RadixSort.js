

function radixSort(arr){
    const max= Math.max(...arr);

    //apply counting sort to sort elements based on place value

    for (exp=1; Math.floor(max/exp)>0 ; exp *=10){
        countingSort(arr,exp);
    }
}



function countingSort(arr,exp){

    const n=arr.length;
    const output= new Array(n);
    const count= new Array(10).fill(0);

    //store the count of occurence in count[]

    for (let i=0; i < n; i++){
        const index= Math.floor(arr[i]/exp) % 10;
        count[index]++;
    }

    //change count[i] to store actual position of this digit in output[];

    for(let i=1; i<10; i++){
        count[i] += count[i - 1];
    }

    //build output array using the count position 
    for(let i= n-1; i>=0; i--){
        const index= Math.floor(arr[i] / exp) % 10;
        output[count[index]-1]=arr[i];
        count[index]--;
    }

    //copy the output array to arr[], so that arr[] contains sorted number
    for(let i=0; i< n ;i++){
        arr[i]=output[i];
    }
 
}


//driver method
const arr=[904,46,5,74,62,1];
console.log("Original Array: ",arr);

radixSort(arr);
console.log("Radix Sorted Array: ",arr);

 

