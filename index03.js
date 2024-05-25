let temperature = [-2, 4, 45, 23, -4, 'error', -6, -8, 34, 43];
function getHigherAndLower(arr){
    //Filter out non-numberic values
    let numericArr = arr.filter(item => typeof item === 'number');
    
    //Sort the numeric array
    let sorted = numericArr.sort((a,b) => a-b);

    //check if the array is not empty after filtering
    if(sorted.length === 0){
        console.log("Array contains no numeric values.");
        return null;
    };

    // Get the higher and lower values
    let higher = sorted[sorted.length - 1];
    let lower = sorted[0];

    console.log(`Higher ${higher}, Lower ${lower}`);

    // Return the difference between the highest and lowest values
    return higher - lower;
}

console.log(getHigherAndLower(temperature));