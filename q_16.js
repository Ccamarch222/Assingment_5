"use strict";
/*Create a function that removes all falsey values from an array. Falsey values include
false, null, 0, "", undefined, and NaN.*/
let array = ["maryam", 0, "where u from", null, "Hello", undefined, "", 98, NaN];
function remove_Falsey_Values(array) {
    return array.filter(value => !!value);
}
const new_Filterd_Array = remove_Falsey_Values(array);
console.log("Filterd Array", new_Filterd_Array);
