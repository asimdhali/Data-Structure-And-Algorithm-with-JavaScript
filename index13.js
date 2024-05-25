// Sorting Algorithm, class 19
// Bubble sort selection sort, insertion sort

let arr = [6,12,7,23,-23,100];
// arr.sort();
// arr.sort((a,b)=>a-b);
arr.sort((a,b)=>b-a);
console.log(arr);

// **
let arrOfCity = ['Rangamati','Khulna', 'Rajshahi', 'Bagerhat', 'Gaibandha', 'SyedPur','Chittagong','Borguna'];

// let sortedCity = arrOfCity.sort((a,b)=>b.localeCompare(a));
let sortedCity = arrOfCity.sort()
// console.log(sortedCity);