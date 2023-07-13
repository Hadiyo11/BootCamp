"use strict";
// "use strict";
// function sayHello() {
//     let you = prompt("What's your name? ");
//     console.log("Hello", you + "!");
//    }
// sayHello();

// let descriptiveWords = ["Lovely", "Beautiful", "Silly", "Ugly"];
// function getCompliment() {
//     let username = prompt("What is your username");
//     let compliment = descriptiveWords[Math.floor(Math.random()*descriptiveWords.length)];
//     alert(`${username} is ${compliment}`);
// }
// getCompliment();

// function calculate(num1, num2, operator){
//     if (operator === "*"){
//         return num1*num2;
//     } else if (operator === '/'){
//         return num1/num2; 
//     } else if( operator === '%'){
//         return num1%num2;
//     } else if ( operator === '-'){
//         return num1-num2;
//     } else{
//         return num1+num2
//     }
// return num1+operator+num2;
// }
// alert(calculate(10,5,"-"))

// function addTwoNumber(x=0,y=0){
//     return x+y;
// }

// alert(addTwoNumber());// if you pass it nothing you get Nan error

//Arrow Functions 
// let doingArrowStuff = x => console.log(x);
// doingArrowStuff("Great!");

// let sayHi = () => console.log('Hi');
// sayHi();

// let arr = ["squirrel", "alpaca", "buddy"];
// // arr.forEach( e => console.log(e)); //executes a certain function for every element in the array

// let result =arr.find( e => e === "buddy");// find the word buddy and return
// alert(result);

//Spread Operator. If you want to insert one array into another array. Just use ...
// let arr =  ["so", "much", "fun"];
// let message = ["JavaScript", "is", ...arr, "and", "very", "powerful"];
// console.log(message);

// function addTwoNumber(x,y){
//     console.log(x+y);
// }
// let arr = [5,9];
// addTwoNumber(...arr);

// function addFourNumbers(x, y, z, a) {
//     console.log(x+y+z+a)
// }
// let arr = [5,6];
// let arr2= [7,9];
// addFourNumbers(...arr, ...arr2);

//Rest parameter used inside the function parameter
// function someFunction(param1,param2,...param3) { //param2 becomes an array
//     console.log(param1, param2,param3);
// }
// someFunction("hi", "there", "how are you","I am well", "Lets go out");

//Return 
// function addTwoNumber(x,y){
//          return x+y;
//     }
//     let result = addTwoNumber(4,5);
//     console.log(`The result is ${result}`);


// function addTwoNumber(x,y){
//          return x+y;
//     }
// let resultArr = [];
// for (let i=0; i<10; i++){
//     let result = addTwoNumber(i,i*2);
//     resultArr.push(result);
// }
// console.log(resultArr);

// Practice 6.4
// let resultArr = [];
// for (let i=0; i<10; i++){
//     let result = addTwoNumber(i*5,i*i);
//     resultArr.push(result);
// }
// console.log(resultArr);
// function addTwoNumber(x,y){
//     return x+y;
// } 
// let addTwoNumber = (x, y) => {
//     console.log("busy adding")
//     return x+y;} //if you put curly brackets, use a return. If arrow has 1+ function use curly brackets
// let resultArr = [];
// for (let i=0; i<10; i++){
//     let result = addTwoNumber(i*5,i*i);
//     resultArr.push(result);
// }
// console.log(resultArr);

//Local variables in functions- only exist inside the function in which it is created
// function testAvailability(x){
//     console.log(`Available here: ${x} `);
// }
// testAvailability("Hi"); 
// console.log(`Available here: ${x}`); //undefined since the function only exists inside the function

// function testAvailability(x){
//     let y="Local variable"
//     console.log(`y is Available here: ${y}`);
//     console.log(`x is available here ${x}`);
// }
// testAvailability("Hi");
// console.log(`y is not available here: ${y}`);
// console.log(`x is not available here ${x}`);

// function testAvailability(){
//     let y = "I'll return";
//     console.log(`Available here ${y}`);
//     return y;
// }
// let z= testAvailability();
// console.log(`${z} is available here`);
// console.log(`${y} is not available here`);

//let vs var let is block-scoped you cant use it outside the block
// let x;
// function doingStuff() {
//     if(true){
//          x = "local"
//     }
//     console.log(x);
// }
// doingStuff();

// function doingStuff() {
//     if (true) {
//         const X = "local";
//  }
//  console.log(X);
// }
// doingStuff();

//global variable are declared outside function and can be used everywhere
// let x = 'global';
// function doingStuff(){
//     let x = 'local';
//     console.log(x);
// }
// doingStuff();
// console.log(x);

// function confuseReader() {
//     x = "Guess my scope...";
//     console.log("Inside the function:", x);
//    }
//    confuseReader();
//    console.log("Outside of function:", x); // it is going to assume that it is a global variable since a let or var is not used

//anonymous functions
// let anonFunc = function (){
//     console.log("anonymous")
// }
// anonFunc();

//invoke anonymous function
// (function(name) {console.log(name)})("Hadiyo");
// ((team,year) => console.log(team,year)("Bafana Bafana", 2023));

// let val1 = 1000;
// let val2 =(()=>{
//     let val = "Hadiyo";
//     console.log(`inside function val ${val}`);
//     return val;
// })()
// console.log(`outside function val ${val1}`);
// console.log(`outside function val2 ${val1}`)

//Recursive function 
// function getRecursive(nr) {
//     console.log(nr);
//     getRecursive(--nr);
//    }
//    getRecursive(3); 

// function getRecursive(nr) {
//     console.log(nr);
//     if(nr > 0){
//     getRecursive(--nr);
//     }
//    }
//    getRecursive(3); // it calls itself starting from 3 then stops when nr = 0

// function getRecursive(nr) {
//     console.log("Started function:", nr);
//     if (nr > 0) {
//     getRecursive(nr - 1);
//     } else {
//     console.log("done with recursion");
//     }
//     console.log("Ended function:", nr);
//    }
//    getRecursive(3);

//Practice exercise 6.6
// function calcFactorial(nr){
//     if(nr === 0){
//         return 1;
//     } else {
//         return nr * calcFactorial(nr-1);
//     }
// }
// let num = prompt("Give me a number to calculate a factorial for you")
// let factorial = calcFactorial(num);
// alert(`The factorial of ${num} is ${factorial}`);


//Nested Functions function inside a function
// function doOuterFunctionStuff(nr){
//     console.log("Outer Function");
//     doInnerFunctionStuff(nr);
//     function doInnerFunctionStuff(x){
//     console.log(x+7);
//     console.log(nr);
// }
// console.log(x);
// }
// doOuterFunctionStuff(2);// outer function doesnt have access to the inner function but inner function does


// do anonymous functions
//we create functions without names if we store them inside variables 
// let functionVariable = function () {
//     console.log("Not so secret though.");
//    };
//    functionVariable();

//function callbacks
// function functionVariable() {
//     console.log("Not so secret though.");
//    };
// function doFLexibleStuff (executeStuff) {
//     executeStuff();
// }
// doFLexibleStuff(functionVariable);

// function myFunction(){
//     console.log("I am enjoying doing");
// };
// function doFLexibleStuff(executeStuff){
//     executeStuff();
// }
// // doFLexibleStuff(myFunction); //pass a function another function as an argument

// doFLexibleStuff(() => alert("hi there");

function youGotThis() {
    console.log("You are doing really well, keep going");
};
setTimeout(youGotThis, 3000);// function is also being called as a parameter in this setTimeOut function

