// complicated, should be revised
// Selection sort implementation
function selectionSort(arr){
    for(let i=0; i<arr.length; i++){
        let lowest = i;
        for(let j=i+1; j<arr.length; j++){
            // console.log(i, j);
            if(arr[lowest] > arr[j]){
                lowest = j
            }
        }
        if(i !== lowest){
            // console.log(arr, i, lowest);
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
};
// console.log(selectionSort([23,12,-12,98]));
console.log(selectionSort([0,1,-1,3]));