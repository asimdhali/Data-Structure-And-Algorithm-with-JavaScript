// **Analyze time and space complexity
function sumOfArraySlow(arr){
    if(arr.length === 0) return 0;
    let rest = arr.slice(1);
    // console.log(rest)
    return arr[0] + sumOfArraySlow(rest);
}
// console.log(sumOfArraySlow([2,3,5]));
// Time Complexity = bigO(n*n) = n^2
// Space Complexity = BigO(n)

// ***
function sumOfArrayFast(arr){
    return helperSum(arr, 0)
}

function helperSum(arr, index){
    if(arr.length === index) return 0;
    return arr[index] + helperSum(arr, index + 1);
}

// console.log(sumOfArray([]));
// console.log(sumOfArrayFast([2,3,5,1]));
// Time = BigO(n)
// space = BigO(n)

let input = new Array(8000).fill(1);
// console.log(input)

let now = Date.now();
console.log(sumOfArraySlow(input));
let finish = Date.now();
console.log(`Time elapsed for slowFunction ${finish-now}`);

let now2 = Date.now();
console.log(sumOfArrayFast(input))
let finish2 = Date.now();
console.log(`Time elapsed for fastFunction ${finish2-now2}`);