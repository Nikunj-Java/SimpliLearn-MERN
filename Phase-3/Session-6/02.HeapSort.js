

function HeapSort(arr){

        const n=arr.length;

        //Build a min heap

        for(let i=Math.floor(n/2)-1; i>=0;i--){
            heapify(arr,n,i); //create this method
        }

        //extract the elements
        for(let i= n-1; i > 0; i--){

            //swap the root with the last element
            [arr[0],arr[i]]=[arr[i],arr[0]];

            //restore the heap property
            heapify(arr,i,0);

        }

        arr.reverse();
}

function heapify(arr,n,i){

    let smallets=i;
    const left= 2 * i + 1; //left child index
    const right= 2* i + 2; //right child index


    // if the left child is smaller than the root
    if(left< n && arr[left] < arr[smallets]){
        smallets=left;
    }

    // if the right child is smaller than the smallest
    if(right< n && arr[right] < arr[smallets]){
        smallets=right;
    }

    //if the smallest is not  the root
    if(smallets !== i){
        //swap root with the samllest child
        [arr[i], arr[smallets]]=[arr[smallets],arr[i]];

        //again we need to heapify
        heapify(arr,n,smallets);
    }

}

const arr= [8,3,2,7,9,1,4];

console.log("Original Array: ",arr);

HeapSort(arr);

console.log("Heap Sorted Array: ",arr);