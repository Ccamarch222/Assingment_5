/*Create a function isSorted that checks if an array is sorted in ascending order*/

function isSorted(numbers:number[]) :boolean{
    for(let i = 0 ;i < numbers.length ; i++) {
        if(numbers[i -1] > numbers[i]) 
        return false 

    } return true;
    
};
console.log(isSorted([1,2,4,5,6,7]));
console.log(isSorted([3,2,6,5,7,2,8]));
console.log(isSorted([10,15,21,33,45,50]));
console.log(isSorted([21,13,47,28,97,58,76]));






