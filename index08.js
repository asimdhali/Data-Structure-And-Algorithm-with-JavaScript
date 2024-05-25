// Recursion
// function countDown(n){
//     for(let i=n; i>0; i--){
//         console.log(i)
//     }
// }
// countDown(10);

// *** recursion
// function countDown(n){
//     console.log(n)
//     n--;
//     if(n>0){
//         countDown(n);
//     }
// }
// countDown(10);


// **
// function sumOfNumber(n){
//     let sum = 0;
//     for(let i=n; i >= 0; i--){
//         sum += i;
//     }
//     return sum;
// }
// console.log(sumOfNumber(10));


// **
function sumOfNumber(n){
    if(n<0) return 0;
    return n+sumOfNumber(n-1); 
}
console.log(sumOfNumber(10));