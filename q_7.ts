//Write a loop that logs numbers from 1 to 50. For multiples of 3, log "Fizz" 
/*instead of the number, and for multiples of 5, log "Buzz".*/
for(let i=0;i<=50;i++){
    if(i%3==0){
        console.log("Fiz")
    }else if (i%5==0){
        console.log("Buzz")
    }else{
        console.log(i)
    }

}