// Insertion sort implentation , class 23
function insertSort(arr){
    for(let i=1; i<arr.length; i++){
        for(let j=i; j>0; j--){
            // console.log(i, j)
            if(arr[j] < arr[j-1]){
                // let temp = arr[j];
                // arr[j] = arr[j-1];
                // arr[j-1] = temp;
                [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
            } else{
                break;
            }
        }
    }
    return arr;
};
console.log(insertSort([3,23,-12,34]));