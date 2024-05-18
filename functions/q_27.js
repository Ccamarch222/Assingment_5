"use strict";
/*Write a function that receives an array of names and formats them into a string separated
 by commas, except for the last two names, which should be separated by "and".*/
function formatsNames(names) {
    if (names.length < 2)
        return names.join("");
    return `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}`;
}
console.log(formatsNames([]));
console.log(formatsNames(["Meherban"]));
console.log(formatsNames(["Meherban", "Saim"]));
console.log(formatsNames(["Meherban", "Saim", "Rohan"]));
console.log(formatsNames(["Meherban", "Saim", "Rohan", "Imtishal"]));
