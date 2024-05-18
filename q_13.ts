//Develop a function that takes an array of numbers and returns a new array with each number squared.

let numbers:number[]= [2,3,4,5,6,7,8]
let squared = [];
for(let i= 0; i <numbers.length;i++) {
    let squaredValue = numbers[i] **2 ;
    squared.push(squaredValue)
}
 console.log("Number array:",numbers);
 console.log("Number of Squared array:",squared)