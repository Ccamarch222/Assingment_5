"use strict";
/*Write a function that takes an array of integers and sorts them from smallest to largest.*/
Object.defineProperty(exports, "__esModule", { value: true });
function sortsArray(numbers) {
    return numbers.sort((a, b) => a - b);
}
const numbers = [45, 23, 72, 4, 56, 97, 58,];
console.log("\n ShortsArray function result depend on array: \n", numbers);
console.log("\n Result: \n", sortsArray(numbers));
