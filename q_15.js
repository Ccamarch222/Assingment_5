"use strict";
/*Given an array scores [10, 5, 20, 20, 4, 5, 2, 25, 1], write a function that logs the number of
times the score exceeded the maximum score and the number of times it fell below the minimum score.*/
let scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
function countAxceedsAndFalls(scores) {
    let maxScore = scores[0];
    let minScore = scores[0];
    let axceedsCount = 0;
    let fallsCount = 0;
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > maxScore) {
            axceedsCount++;
        }
        if (scores[i] < minScore) {
            fallsCount++;
        }
    }
    console.log("Axceeds count:", axceedsCount);
    console.log("Falls count:", fallsCount);
}
countAxceedsAndFalls(scores);
