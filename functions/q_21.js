"use strict";
/*Write a function calculateProduct that takes an array of numbers and
 returns the product of all elements.*/
Object.defineProperty(exports, "__esModule", { value: true });
let array = [1, 2, 3, 4, 5];
function calculateProduct(array) {
    if (array.length === 0) {
        return 0;
    }
    let product = 1;
    for (let i = 0; i < array.length; i++) {
        product *= array[i];
    }
    return product;
}
console.log(calculateProduct(array));
