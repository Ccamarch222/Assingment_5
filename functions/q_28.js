"use strict";
/*Develop a function that converts an array of Fahrenheit temperatures to
 Celsius and logs the new temperatures.*/
Object.defineProperty(exports, "__esModule", { value: true });
function convertToFahrenheit(temperatures) {
    return temperatures.map(temperatures => ((temperatures - 32) * 5 / 9));
}
const temperatures = [32, 54, 35, 64];
const celsiusTemperatures = convertToFahrenheit(temperatures);
console.log(celsiusTemperatures);
