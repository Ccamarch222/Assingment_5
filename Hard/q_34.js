"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*Develop a TypeScript program that logs every element of an array in reverse order without using
the .reverse() method.*/
function reverseArray(elements) {
    let reversed = [];
    for (let i = elements.length - 1; i >= 0; i--) {
        reversed.push(elements[i]);
    }
    return reversed;
}
const elements = [1, 2, 3, 4, 5];
console.log(elements);
console.log("\n reverseArray: \n", reverseArray(elements));
