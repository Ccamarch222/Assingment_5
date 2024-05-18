"use strict";
/*Create a function that checks whether an element exists in an array. If it exists,
return the index, otherwise return -1*/
Object.defineProperty(exports, "__esModule", { value: true });
let array = [1, 2, 3, 4, 5, 6, 7, 8, 12, 13, 14, 9];
let element = 9;
function findElement(array, element) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return i;
        }
    }
    return -1;
}
console.log(findElement(array, element));
console.log(findElement(array, 8));
console.log(findElement(array, 11));
