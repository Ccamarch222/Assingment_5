"use strict";
/*Write a JavaScript function that accepts an array and reverses its elements without using
the .reverse() method. Log the result.*/
const reverse = (arr) => {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        newArray.push(arr[arr.length - 1 - i]);
    }
    return newArray;
};
console.log(reverse([1, 2, 3, 4, 5, 6, 7,]));
