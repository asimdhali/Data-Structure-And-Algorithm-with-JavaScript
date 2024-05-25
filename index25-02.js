var twoSum = function(nums, target){
    let numMap = {};
    for(let i=0; i<nums.length; i++){
        let remaing = target - nums[i];
        if(remaing in numMap){
            return [numMap[remaing], i];
        }
        numMap[nums[i]] = i;
    }
    return false;
}
console.log(twoSum([2,7,11,15], 9))