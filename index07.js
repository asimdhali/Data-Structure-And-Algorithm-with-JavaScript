function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let sequenceCounter1 = {};
    let sequenceCounter2 = {};

    for(let val of arr1){
        // console.log(val)
        sequenceCounter1[val] = sequenceCounter1[val] + 1 || 1;
    }
    // console.log(sequenceCounter1);

    for(let val of arr2){
        // console.log(val)
        sequenceCounter2[val] = sequenceCounter2[val] + 1 || 1;
    }
    // console.log(sequenceCounter2)

    for(let key in sequenceCounter1){
        // console.log(key)
        if(!(key ** 2) in sequenceCounter2){
            return false;
        }

        if(sequenceCounter2[key ** 2] !== sequenceCounter1[key]){
            return false;
        }
    }
    return true;
}
// same([2,3,6], [9,4,36]);
console.log(same([2,3,6], [9,4,36]));