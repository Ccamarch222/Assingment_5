"use strict";
/*Develop a function countOccurrences that counts how many times a
specific element appears in an array.*/
Object.defineProperty(exports, "__esModule", { value: true });
function countOccurrences(arrays, elements) {
    return arrays.filter((arr) => arr === elements).length;
}
;
const arrays = [1, 2, 3, 4, 3, 5, 4, 6, 7, 2, 7, 1, , 1, 8, 7, 9];
const elements = 2;
console.log('\n How many times aspecific element 2. Appears in an array: \n', countOccurrences(arrays, elements));
console.log('\n How many times aspecific element 1. Appears in an array: \n', countOccurrences(arrays, 1));
console.log('\n How many times aspecific element 3. Appears in an array: \n', countOccurrences(arrays, 3));
console.log('\n How many times aspecific element 4. Appears in an array: \n', countOccurrences(arrays, 4));
console.log('\n How many times aspecific element 5. Appears in an array: \n', countOccurrences(arrays, 5));
console.log('\n How many times aspecific element 6. Appears in an array: \n', countOccurrences(arrays, 6));
