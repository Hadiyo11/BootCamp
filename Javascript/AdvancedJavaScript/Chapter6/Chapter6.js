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

//Spread array. If you want to insert one array into another array. Just use ...
// let arr =  ["so", "much", "fun"];
// let message = ["JavaScript", "is", ...arr, "and", "very", "powerful"];
// console.log(message);

// function addTwoNumber(x,y){
//     console.log(x+y);
// }
// let arr = [5,9];
// addTwoNumber(...arr);

function addFourNumbers(x, y, z, a) {
    console.log(x+y+z+a)
}
let arr = [5,6];
let arr2= [7,9];
addFourNumbers(...arr, ...arr2);