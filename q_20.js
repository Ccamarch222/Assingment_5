"use strict";
/*Write a function to find and return the smallest number in an array of integers*/
Object.defineProperty(exports, "__esModule", { value: true });
let array = [1, 2, 3, 4, 5, 6, 7, 8];
function findSmallestNum(array) {
    let SmallestNum = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < SmallestNum) {
            SmallestNum = array[i];
        }
    }
    return SmallestNum;
}
console.log(findSmallestNum(array));
