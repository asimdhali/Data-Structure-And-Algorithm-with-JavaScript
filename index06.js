function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i=0; i<arr1.length; i++){
        let currentIndex = arr2.indexOf(arr1[i] ** 2)
        // console.log(currentIndex)
        if(currentIndex === -1){
            return false
        }
        arr2.splice(currentIndex, 1);
        console.log(arr2)
    }
    return true;
}
// same([2,3,6], [9,4,36]); //true
console.log(same([2,3,6],[36,9,4]));


// same([2,3,6], [9,4,6]); //false
// same([2,3], [9,4,6]); //false