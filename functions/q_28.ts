/*Develop a function that converts an array of Fahrenheit temperatures to
 Celsius and logs the new temperatures.*/
   
function convertToFahrenheit(temperatures:number[]):number [] {
    
    return temperatures.map(temperatures => ((temperatures -32)*5 /9));
}

const temperatures:number [] =[32,54,35,64];
const celsiusTemperatures:number[] =convertToFahrenheit(temperatures)
console.log(celsiusTemperatures);
export{}