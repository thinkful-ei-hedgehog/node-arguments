let args = process.argv; //Array/List of input information
 
console.log(args);  //What is this logging?
 
let nodeInstall = args[0]; //first item
let currentFilePath = args[1]; //second item
let additionalArgs = args[2]; //third item

console.log('Hello', additionalArgs);
console.log('Hello '+ additionalArgs);
console.log(`Hello ${additionalArgs}`);  //Template literal

 
//Lets use the args to output a message
/*if(additionalArgs){
    console.log(`Your name is ${additionalArgs}`)
}*/
 
 
//You can also set local enviroment variables
//I will first set NODE_ENV=development node main.js in my terminal
//this runs my file and exposes the enviroment variable I set
//console.log(process.env.NODE_ENV)