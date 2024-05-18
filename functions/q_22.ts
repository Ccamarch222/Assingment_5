/*Develop a function filterByLength that takes an array of strings and a number n. 
The function should return an array containing only the strings that are longer than n characters.*/


let array:string[] = ["meherban","rohan","saim","usama","ali","imtishal","ahmad","gulam mustfa"];
let n:number = 5;
 
function filterByLength(array:any[],n:number){
    return array.filter(Str => Str.lenght>n);

}
console.log(filterByLength(array,n));
console.log(filterByLength(array,8));
console.log(filterByLength(array,4));
export {}