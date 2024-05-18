"use strict";
/*Write a function incrementAll that takes an array of integers and increments
each element by one.*/
Object.defineProperty(exports, "__esModule", { value: true });
function incrementAll(array) {
    return array.map(number => number + 1);
}
const array = [1, 2, 4, 5, 5];
console.log(array);
console.log('\n Increment each element in an array \n', incrementAll(array));
