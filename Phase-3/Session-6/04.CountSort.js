

function countSort(arr){

    //find maximum value in array
    const max= Math.max(...arr);

    //create a count array to store the count of each unique value

    const count= new Array(max + 1).fill(0);

    //count occurrance of each value

    arr.forEach(num => count[num]++);


    //reconstruct the array

    let index=0;

    for(let i=0; i< count.length; i++){
        while(count[i]>0){
            arr[index++]=i;
            count[i] --; //element handled at correct position without duplication
        }
    }
}


const arr=[4,2,2,8,3,3,1];
console.log("original Array:",arr);

countSort(arr);
console.log("Sorted Array:",arr);