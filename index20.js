// Bubble Sort, class 20
// Coto theke boro, [4,12,5,-1]

function bubbleSort(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length-1; j++){
            // console.log(arr[i], arr[j])
            // console.log(arr[j], arr[j+1]);
            console.log("to see", arr, arr[j], arr[j+1]);
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
// temp = 2;
// bubbleSort([2,53,23,1,-3]);
bubbleSort([4,1,2,3]);
// console.log(bubbleSort([2,53,23,1,-3]));

// let [arr1, arr2] = [arr2, arr1] // swap rule 