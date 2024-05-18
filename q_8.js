"use strict";
//Define an array temperatures with at least five different temperatures (numbers).
/* Write a script to find and log the highest temperature.*/
const temperatures = [45, 34, 92, 55, 67];
let highest = temperatures[0];
for (let i = 1; i < temperatures.length; i++) {
    if (temperatures[i] > highest) {
        highest = temperatures[i];
    }
}
console.log("Highest temperature:", highest);
