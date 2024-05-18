/*Create a function swapElements that swaps two specified indices in an array.*/

function swapElements<T>(numbers:T[],index1:number,index2:number):T[]{
    console.log(`Swaping at index ${index1} and index ${index2}`);
    console.log(`BSefor Swap:  index${index1} = ${numbers[index1] } ,index${index2} = ${numbers[index2]}`);
    let temp = numbers[index1];
    numbers[index1] = numbers[index2];
    numbers[index2] = temp;
    console.log(`After Swap: index ${index1} = ${numbers[index1]}, index ${index2} = ${numbers[index2]}`);
    return numbers
}

const numbers = [10,20,30,40,50,60];
console.log("\n Result SwapElements depend on number array: \n",numbers);

 swapElements(numbers,1,3);
console.log('Modifide array:' ,numbers);

export{}