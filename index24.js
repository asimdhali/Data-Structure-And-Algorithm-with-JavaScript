// online judge in bangal leetcode, class 23
var twoSum = function(nums, target){
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j <nums.length; j++){
            // console.log(nums[i], nums[j]);
            if((nums[i]+nums[j]) === target) return [i,j];
        }
    }
    return false;
};
// twoSum([3,2,4],6);
console.log(twoSum([2,7,11,15],900));
// target = 6;
// [3,2,4];