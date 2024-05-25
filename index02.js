let temperature = [-2, 4, 45, 23, -4, 'error', -6, -8, 34, 43];
const getHigherAndLower = arr =>{
    let onlyNums = arr.filter(item => 'number' === typeof item)
    let high = Math.max(...onlyNums);
    let low = Math.min(...onlyNums);
    return high - low
}

console.log(getHigherAndLower(temperature));