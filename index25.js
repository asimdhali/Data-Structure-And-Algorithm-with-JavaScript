// Resubmit LeetCode Two Sum Problem, class 25

function twoSum(nums, target){
    for(let i=0; i<nums.length; i++){
        let remaing = target - nums[i];
        for(let j=i+1; j<nums.length; j++){
            if(remaing === nums[j]) return [i, j]
        }
    }
    return false;
};

console.log(twoSum([2,7,11,15],9));