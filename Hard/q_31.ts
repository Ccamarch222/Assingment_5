/*Develop a function that takes two inputs, a string and a character, and returns the
 number of times the character appears in the string.*/
 
 function countCharacter(str:string,char:string):number{
    return str.split("").filter( c => c === char).length;
 }
 
 const str = "hello";
 const char = "l";
 const count = countCharacter(str, char)
 console.log("\n count character in tha string: \n",str);
 console.log("Count L character:");
 console.log(count);
