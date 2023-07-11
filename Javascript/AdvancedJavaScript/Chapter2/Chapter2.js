// const someConstant = 3;
// someConstant = 4; //should get an error

// let funActivity = "Let's learn JavaScript";
// let funActivity1 = 'Let\'s learn JavaScript'//add escape character if you are using single quotes
// let question = "Do you want to learn JavaScript? "

// let language = "JavaScript";
// // let message = "Let's learn " + language;
// let message=`lets learn ${language}`;
// console.log(message);

// let str3 = "New \nline."; //to form a new line in the sentence
// let str4 = "I'm containing a backlash: \\!"; //just showing that the sentence is containing an escape character
// console.log(str3);
// console.log(str4);

// let intNr = 1;
// let bigNr = 90071992547409920n;
// let result = intNr + bigNr;
// console.log(result); //received an error since you can not add a bigInt with other data types

// let str1 ="JavaScript is fun!";
// let str2 ="JavaScript is fun!"
// console.log("These two strings are the same:", str1 === str2); //true

// let sym1 = Symbol("JavaScript is fun!");
// let sym2 = Symbol("JavaScript is fun!");
// console.log("These two Symbols are the same:", sym1 === sym2); //false

// let str = "Hello";
// let nr = 7;
// let bigNr = 12345678901234n;
// let bool = true;
// let sym = Symbol("unique");
// let undef = undefined;
// let unknown = null;
// console.log("str", typeof str);
// console.log("nr", typeof nr);
// console.log("bigNr", typeof bigNr);
// console.log("bool", typeof bool);
// console.log("sym", typeof sym);
// console.log("undef", typeof undef);
// console.log("unknown", typeof unknown);

// let nr1 = 2;
// let nr2 = "2";
// console.log(nr1 + nr2); //22 javacsript wont convert it to a number
// console.log(nr1 * nr2); // 4 be converted to a number since we are using multiplication

// let nrToStr = 6;
// nrToStr = String(nrToStr);
// console.log(nrToStr, typeof nrToStr); //6 is a string

// let strToNr ="12";
// strToNr = Number(strToNr);
// console.log(strToNr, typeof strToNr); //12 is a number

// let strToNr =" ";
// strToNr = Number(strToNr);
// console.log(strToNr, typeof strToNr); //0 is a number so the space becomes the number

// let strToNr ="hell0";
// strToNr = Number(strToNr);
// console.log(strToNr, typeof strToNr); //NaN number

// let strToBool2 = "false";
// strToBool2 = Boolean(strToBool2);
// console.log(strToBool2, typeof strToBool2); //true boolean

// let strToBool = "";
// strToBool = Boolean(strToBool);
// console.log(strToBool, typeof strToBool); //false boolean since you ""/0 converts to false while string or number converts to true

// let str1 ='Laurence';
// let str2 ="Svekis";
// let val1 = undefined;
// let val2 = null;
// let myNum =1000;
// console.log(typeof str1); //string
// console.log(typeof str2); //string
// console.log(typeof val1); //undefined
// console.log(typeof val2); //object
// console.log(typeof myNum); //number;

// let myName = "Hadiyo";
// let age = 20;
// let codeJs = true;
// console.log(`Hello, my name is: ${myName}, I am ${age} years old and I can code in JavaScript: ${codeJs}`);

// let nr1 = 20;
// let nr2 = 4;
// let str1 = "Hi";
// let nr3 = 3;
// let result1 = nr1 - nr2;
// let result2 = str1 - nr3; //NaN
// console.log(result1, result2);

// let nr1 = 2;
// let nr2 = 3;
// let result = nr1 ** nr2;
// console.log(result);

// let nr1 = 10;
// let nr2 = 3;
// let result = nr1 % nr2;
// console.log(`${nr1} % ${nr2} = ${result}`);

// let nr1 = 4;
// // nr1++;
// // console.log(nr1) // 5
// console.log(nr1++ + nr1++) //9
// console.log(++nr1) //7

// Practice exercise 2.3

// alert(
//   "Enter the sizes of a right angled triangle and I will calculate the hypotenuse for you"
// );
// let a = Number(prompt("what is the size of the one size?"));
// let b = Number(prompt("what is the size of the one size?"));
// let cSquared = a ** 2 + b ** 2;
// let hypotenuse = Math.sqrt(cSquared);
// alert(`the hypotenuse is ${hypotenuse}`);

let a = 2;
let b = 4;
let c= 6;
a += b;
a /=c; //divide a by c
c %= b; //what the modular
console.log(a, b, c);

