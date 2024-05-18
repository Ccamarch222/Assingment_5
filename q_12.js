"use strict";
//Create a script that logs the second to last element of an array named fruits.
const fruits = ["apple", "banana", "oringe", "ananas", "mango", "KiWi"];
let lastIndex = fruits.length - 1;
let secondToLastIndex = lastIndex - 1;
let secondToLastElement = fruits[secondToLastIndex];
console.log("2nd To Last Element:", secondToLastElement);
