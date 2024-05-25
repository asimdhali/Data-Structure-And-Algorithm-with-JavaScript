var twoSum = function(nums, target){
    const numMap = new Map();
    for(let i=0; i<nums.length; i++){
        const remaing = target - nums[i];
        if(numMap.has(remaing)){
            return [numMap.get(remaing), i];
        }
        numMap.set(nums[i], i);
    }
    return false;
}

console.log(twoSum([2,7,11,15],9));