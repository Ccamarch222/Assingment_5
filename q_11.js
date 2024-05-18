"use strict";
//Write a function that takes an array of words and returns a new array containing 
/*only the words that start with the letter 'a'*/
function find_Word_Starting_With_A(Words) {
    return Words.filter(word => word[0] === "A");
}
const Words = ["Apple", "Butterfly", "Chemical", "Aquamarine", "Azure", "Daffodil", "Canyon"];
const words_Staring_with_A = find_Word_Starting_With_A(Words);
console.log("Words starting with A:", words_Staring_with_A);
