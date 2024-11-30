

function merge(arr,l,m,r){

    var n1=m-l+1;
    var n2=r-m;

    //create two temp array
    var L= new Array(n1);
    var R= new Array(n2);

    //copy the data to temp L[]. R[]

    for(var i = 0;i < n1; i++)
        L[i] = arr[l+i];
    for(var j=0;j < n2; j++)
        R[j] = arr[m + 1 + j];

    //merge temp arrays back to arr[l,,,,,r];

    var i=0; //initial  index of first sub-arrray

    var j=0; //initial index of merger array

    var k=l //initial of merge sub array

    while(i < n1 && j <n2){
            if(L[i] <= R[j]){
                arr[k] = L[i];
                i++;
            }else{
                arr[k] = R[j];
                j++;
            }
            k++;

            //copy the remaining elements of L[] if there are any
            while ( i < n1){
                arr[k] = L[i];
                i++;
                k++;
            }

            //copy the remaining elements of R[] if there are any
            while( j < n2){
                arr[k] = R[j];
                j++;
                k++;
            }
    }

}

function mergeSort(arr,l,r){

   
    if(l>=r){
        return ;
    }
    var m =l+ parseInt((r-l)/2);
    mergeSort(arr,l,m);
    mergeSort(arr,m+1,r);
    merge(arr,l,m,r);


}




function printArray(A,size){
    for(var i = 0; i< size; i++)
        console.log(A [i]+ ", ");
     
}

//driver method

var arr=[58,37,53,3,18,89,8];

var arr_size=arr.length;


//printArray(arr,arr_size);

mergeSort(arr, 0, arr_size - 1);

//console.log("Sorted array: ");

console.log("Sorted array: ");
printArray(arr,arr_size);