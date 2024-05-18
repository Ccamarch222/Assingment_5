"use strict";
function calculator(operand1, operand2, operator) {
    switch (operator) {
        case "+":
            console.log(`${operand1} + ${operand2}:`);
            return operand1 + operand2;
        case "-":
            console.log(`${operand1} - ${operand2}:`);
            return operand1 - operand2;
        case "*":
            console.log(`${operand1} * ${operand2}:`);
            return operand1 * operand2;
        case "/":
            if (operand2 !== 0) {
                console.log(`${operand1} / ${operand2}:`);
                return operand1 / operand2;
            }
            else {
                console.log("Division by zero is not allowed.");
                return NaN;
            }
        default:
            console.log("Invalid operator.");
            return NaN;
    }
}
console.log("Result siple calculator");
console.log(calculator(10, 4, "+"));
console.log(calculator(10, 4, "-"));
console.log(calculator(10, 4, "*"));
console.log(calculator(10, 4, "/"));
console.log(calculator(10, 0, "/"));
console.log(calculator(10, 4, "^"));
