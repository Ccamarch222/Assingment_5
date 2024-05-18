"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*Write a function minMaxAverage that takes an array of numbers and returns an object with properties
for the minimum, maximum, and average of those numbers.*/
function minMaxAverage(numbers) {
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    const average = numbers.reduce((sum, current) => sum + current, 0) / numbers.length;
    return { min, max, average };
}
const numbers = [10, 20, 30, 40, 50];
const result = minMaxAverage(numbers);
console.log("\n Result minmaxAverage depend on number array: \n", numbers);
console.log(`min: ${result.min} , max: ${result.max} ,  average:${result.average}`);
