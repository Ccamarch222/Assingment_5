"use strict";
//Create a function findDuplicates that finds and logs all duplicates in an array
function findDuplicates(item) {
    let uniqueItems = new Set();
    let duplicates = new Set();
    items.forEach((item) => {
        if (uniqueItems.has(item))
            duplicates.add(item);
        uniqueItems.add(item);
    });
    return Array.from(duplicates);
}
let items = [1, 2, 3, 5, 2, 6, 7, 5, 8, 9, 1];
console.log(items);
console.log('\n Dublicate Values in an array \n', findDuplicates(items));
