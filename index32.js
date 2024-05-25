// leetcode medium problem resubmitting, class 32
var maxArea = function(heights){
    let totalWater = 0;
    let firstPointer = 0;
    let lastPointer = heights.length - 1;

    while(firstPointer < lastPointer){
        let height = Math.min(heights[firstPointer], heights[lastPointer]);
        let width = lastPointer - firstPointer;

        let currentWater = height * width;

        totalWater = Math.max(totalWater, currentWater);
        if(heights[firstPointer] <= heights[lastPointer]){
            firstPointer++;
        }else{
            lastPointer--;
        }
    }
    return totalWater;
    // for(let i=0; i<heights.length; i++){
    //     for(let j=i+1; j<heights.length; j++){
    //         let height = Math.min(heights[i], heights[j]);
    //         let width = j-i;
    //         let currentWater = height * width;
    //         totalWater = Math.max(currentWater, totalWater);
    //     }
    // }
}
console.log(maxArea([1,8,6,2,5,4,8,3,7]));