// Optimize previous code, 
var maxArea = function(heights){
    let totalWater = 0;
    for(let i=0; i<heights.length; i++){
        for(let j=i+1; j<heights.length; j++){
            let height = Math.min(heights[i], heights[j]);
            let width = j-i;
            let currentWater = height * width;
            totalWater = Math.max(currentWater, totalWater);
        }
    }
    return totalWater;
}
console.log(maxArea([1,8,6,2,5,4,8,3,7]));

[1,3,8,6,2,5,4,8,3,7] // O(n^2)
// First               Last
// width = L - F = 8 - 0 = 8;
// height = arr[F], arr[L]; //cotota rakhbo
// height = 1, 7; = 1
// currentWater = 8 * 1 = 8;
// totalWater = 0;
// width = ;
// height = ;
// currentWater = ;