"use strict";
//regular expressions are ways to describe text patterns 

// let text = "I love JavaScript";
// console.log(text.match(/javascript/i));//to check if it matches result is an object regex

// let text = "I love React and JavaScript";
// console.log(text.match(/javascript|nodejs|react/i));//find react first

// let text = "I love React and JavaScript!";
// console.log(text.match(/javascript|nodejs|react/gi));//get an array of all the matches

// let text = "c";
// // console.log(text.match(/[abcd]/));//its going to find d
// console.log(text.match(/[a-d]/)); 

// let text = "0t";
// console.log(text.match(/[a-zA-Z]/));//if we wanted any letter lower or upper case
// console.log(text.match(/[a-zA-Z0-9]/g));//want to find a number

/*let text = "äé!";
console.log(text.match(/[a-zA-Z0-9]/));//you will get null since these are special characters
console.log(text.match(/./g));//it will pick it up if you use the dot*/

/*let text = "Just some text.";
console.log(text.match(/\./g)); //find the dot*/

// let text = "I'm 29 years old.";
// console.log(text.match(/\d/g));// find any digits

// let text = "Coding is a lot of fun!";
// console.log(text.match(/\s/g));//find any spaces

// let text = "In the end or at the beginning?";
// console.log(text.match(/\bin/gi));//finds the in at the beginning

// let nr = 357;
// console.log(nr.match(/3/g));//error since nr.match is not a function

// let text = "I love JavaScript! He dislikes spiders. ";
// console.log(text.match(/(love|dislikes)\s(javascript|spiders)/gi));//return love javascript and dislike spiders

// let text = "I love JavaScript!";
// console.log(text.match(/[a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9]/g));// return words with 4 letters

// let text = "You are doing great!";
// console.log(text.match(/n?g/gi));//This looks for a g character that may or not may be preceded by an n

// let text = "123123123";//match for the group 123 one or more times
// console.log(text.match(/(123)+/));

// let text = "123123123a";
// console.log(text.match(/(123)*a/));

// let text = "abcabcabc";
// console.log(text.match(/(abc){1,2}/));//min 1 and max 2

// let text = "I love JavaScript!";
// console.log(text.match(/(?<language>javascript)/i));


//Searching and replacing
// let text = "That's not the case.";
// console.log(text.search(/Case/i));//tells you that it starts at index 15

// let text = "Coding is fun. Coding opens up a lot of opportunities.";
// console.log(text.replace(/Coding/g, "JavaScript"));//replace anything with coding with javascript

//Practice exercise 12.1

//Email validation
// let emailPattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g;
// let validEmail = "maaike_1234@email.com";
// let invalidEmail = "maaike@mail@.com";
// console.log(validEmail.match(emailPattern));//maike_1234@gmail.com
// console.log(invalidEmail.match(emailPattern));//null 


//JavaScript Hosting
// var x;
// x = 5;
// console.log(x);//logs 5

// x = 5;
// console.log(x);
// var x;

// function sayHi() {
//     greeting = "Hello!";
//     console.log(greeting);
//    }
//    sayHi();//error since we are using strict mode

// try {
//     somethingVeryDangerous();
//    } catch (e) {
//     if (e instanceof TypeError) {
//     // deal with TypeError exceptions
//     } else if (e instanceof RangeError) {
//     // deal with RangeError exceptions
//     } else if (e instanceof EvalError) {
//     // deal with EvalError exceptions
//     } else {
//     //deal with all other exceptions
//     throw e; //rethrow
//     }
// } finally {
//     console.log("Error or no error, I will be logged!");
//    }
//    function somethingVeryDangerous() {
//     throw RangeError();
//    }
   

//Parsing JSON 
//parse a json string into an object
// let str = "{\"name\": \"Maaike\", \"age\": 30}";
// let obj = JSON.parse(str);
// console.log(obj.name, "is", obj.age);