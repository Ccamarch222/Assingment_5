/*Develop a function called sumOfElements that calculates the sum of all elements in an 
array that are either even or odd, based on a parameter.*/
let array: number[]=[1,2,3,4,5,6,7,8,9];
function sumOfElements(array:any[], isEven:boolean):number {
    return array.reduce((sum,current) => {
        if(isEven && current %2 == 0) {
            return sum + current
        } else if(!isEven && current % 2 !==0) {
            return sum + current
        } else {
            return sum
        }
    }, 0);
}

console.log(" Sum of Even",sumOfElements(array,true));
console.log("Sum of odd",sumOfElements(array,false));

export {}