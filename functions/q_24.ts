
/*Write a function incrementAll that takes an array of integers and increments
each element by one.*/

function incrementAll(array:number[]) {
    return array.map(number => number +1)
}

const array:number[]=[1,2,4,5,5]; 

console.log(array);
console.log('\n Increment each element in an array \n', incrementAll(array));





export {}
