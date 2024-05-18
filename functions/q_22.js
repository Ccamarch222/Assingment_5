"use strict";
/*Develop a function filterByLength that takes an array of strings and a number n.
The function should return an array containing only the strings that are longer than n characters.*/
Object.defineProperty(exports, "__esModule", { value: true });
let array = ["meherban", "rohan", "saim", "usama", "ali", "imtishal", "ahmad", "gulam mustfa"];
let n = 5;
function filterByLength(array, n) {
    return array.filter(Str => Str.lenght > n);
}
console.log(filterByLength(array, n));
console.log(filterByLength(array, 8));
console.log(filterByLength(array, 4));
