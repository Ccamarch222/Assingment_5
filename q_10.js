"use strict";
//Write a function that takes an array of numbers and returns the count of positive numbers in the array.
const arrays = [1, 6, -5, 5, -4, -8, 4, 8, -1];
const checkPositive = (arrays) => {
    let count = 0;
    for (let i = 0; i < arrays.length; i++) {
        if (arrays[i] >= 0) {
            console.log("Positive index:", i);
            count = count + 1;
        }
    }
    return count;
};
console.log("Total positive count:", checkPositive(arrays));
// console.log("2nd loop");
// function countPositiveNumbers(numbers:any) {
//     // Initialize a variable to store the count of positive numbers
//     let count = 0;
//     // Loop through each number in the array
//     for (let i = 0; i < numbers.length; i++) {
//         // Check if the current number is positive
//         if (numbers[i] >= 0) {
//             // If it is positive, increment the count
//             count++;
//         }
//     }
//     // Return the count of positive numbers
//     return count;
// }
// // Example usage:
// const numbers = [5, -3, 8, -2, 0, 4];
// const positiveCount = countPositiveNumbers(numbers);
// console.log("The count of positive numbers is:", positiveCount);
