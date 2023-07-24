"use strict";
// let s ="Hello";
// console.log(
//     s.concat(" there!")
//     .toUpperCase()
//     .replace("THERE", "you")
//     .concat(" You are amazing")
// );

// let x = 10;
// console.log(isNaN(x)); //it is a number.

// decodeUri and encodeURI
// let uri = "https://www.example.com/submit?name=maaike van putten";
// let encoded_uri = encodeURI(uri);
// console.log(encoded_uri);
// let decoded_uri = decodeURI(encoded_uri);
// console.log(decoded_uri);

//Practice exercise 8.1
// let encoderedString = "How's%20it%20going%3F";
// let decodedString = decodeURIComponent(encoderedString);
// console.log(decodedString);
// encoderedString = encodeURIComponent(decodedString);
// console.log(encoderedString);
// let webUri = "http://www.basescripts.com?=Hello World";
// endcodedWebUri = encodeURIComponent(webUri);
// console.log(endcodedWebUri);

// let str_float = "7.6";
// let int_float = parseInt(str_float);//cut of decimal rather use Number
// console.log("Type of", int_float, "is", typeof int_float);

// let str_float = "7.6";
// let float_float = parseFloat(str_float);
// console.log("Type of", float_float, "is", typeof float_float);//this can read decimal compared to parseInt

//Arrays
// let arr = ["grapefruit", 4, "hello", 5.6, true];
// function printStuff(element){
//     console.log("Printing stuff:", element);
// }
// arr.forEach(printStuff); //forEach calls each parameter in a function of an array

//Filter an array
// We can use the built-in filter() method on an array to alter which values are in the
// array. The filter method takes a function as an argument, and this function should
// return a Boolean. If the Boolean has the value true, the element will end up in the
// filtered array. If the Boolean has the value false, the element will be left out.
// let arr = ["squirrel", 5, "Tjed", new Date(), true];
// arr.filter(checkString).forEach(printStuff)
// // let filterArr = arr.filter(checkString);
// // console.log(filterArr);
// function checkNum(element, index) {
//     return typeof element === "number";
//    }
// //    function printStuff(element, index){
// //         console.log("Printing stuff:", element, "on array psition:", index);
// //     }

// let arr = [1, 5, 4, 6, 10];
// console.log(arr.every(checkNum));// checks if elements are strings/numbers in this instance. If they are not,it will return false

// let arr = [40, 100, 700, 1000, 399];
// console.log(arr.every(checkNum));

// function checkNum(element){
//     return element > 50;
// }

//Replacing a part of an array with another part of the array
// arr = ["grapefruit", 4, "hello", 5.6, true];
// arr.copyWithin(0, 3, 4);//[ 5.6, 4, 'hello', 5.6, true ]
// let arr = ["grapefruit", 4, "hello", 5.6, true, false];
// arr.copyWithin(0, 3);
// console.log(arr);//[ 5.6, true, false, 5.6, true, false ]
// let arr = [1, 2, 3, 4];//if you want to change all the values in an array
// let mapped_arr = arr.map(x => x + 1);
// console.log(mapped_arr);// 2, 3, 4, 5

//Finding the last occurrence in an array
// let bb = ["so", "bye", "bye", "love"];
// console.log(bb.lastIndexOf("bye")); //2

//Practice exercise 8.2
// let arr = [
//   "Laurence",
//   "Mike",
//   "Larry",
//   "Kim",
//   "Joanne",
//   "Laurence",
//   "Mike",
//   "Laurence",
//   "Mike",
//   "Laurence",
//   "Mike",
// ];
// let arr2 = arr.filter((value, index, array) => {
//   console.log(value, index, array.indexOf(value));
//   return array.indexOf(value) === index;
// });
// console.log(arr2);

// Practice exercise 8.3
// let myArr = [1,4,5,6];
// let myArr1 = myArr.map(function(ele){
//  return ele * 2;
// });
// console.log(myArr1);
// let myArr2 = myArr.map((ele)=> ele*2);
// console.log(myArr2)

//Combining strings
// let s1 = "Hello ";
// let s2 = "JavaScript";
// let result = s1.concat(s2);
// console.log(result);

// let result = "Hello JavaScript";
// let arr_result = result.split(" ");
// console.log(arr_result);// converting a string to an array

// let favoriteFruits = "strawberry,watermelon,grapefruit";
// let arr_fruits = favoriteFruits.split(",");
// console.log(arr_fruits);

// let letters = ["a", "b", "c"];
// let x = letters.join();
// console.log(x);//a,b,c

//Working with index and positions 
// let poem = "Roses are red, violets are blue, if I can do JS, then you can too!";
// let index_re = poem.indexOf("re");
// console.log(index_re);//re is in are, and the re begins at index 7
// let searchStr = "When I see my fellow, I say hello";
// let pos = searchStr.search("lo");
// console.log(pos);// 17

//creating substrings
// let str = "Create a substring";
// let substr1 = str.slice(5);
// let substr2 = str.slice(0,3);
// console.log("1:", substr1);
// console.log("2:", substr2);//1: e a substring 2: Cre

//Replacing parts of a string
// let hi = "Hi buddy";
// let new_hi = hi.replace("buddy", "Pascal");
// console.log(new_hi);
// let new_hi2 = hi.replace("not there", "never there");
// console.log(new_hi2);

// let s3 = "hello hello";
// let new_s3 = s3.replaceAll("hello", "oh");
// console.log(new_s3);

//Uppercase and lowercase
// let low_bye = "bye!";
// let up_bye = low_bye.toUpperCase();
// console.log(up_bye);

// let caps = "HI HOW ARE YOU?";
// let fixed_caps = caps.toLowerCase();
// console.log(fixed_caps);

//the start and end of a string
// let encouragement = "You are doing great, keep up the good work!";
// let bool_start = encouragement.startsWith("You");
// console.log(bool_start);

//Practice exercise 8.4
// let val = "thIs will be capiTalized for each word";
// function wordsCaps(str) {
//  str = str.toLowerCase();
//  let tempArr = [];
//  let words = str.split(" ");
//  words.forEach(word => {
//  let temp = word.slice(0, 1).toUpperCase() + word.slice(1);
//  tempArr.push(temp);
//  });
//  return tempArr.join(" ");
// }
// console.log(wordsCaps(val));

// //practice 8.5
// let val = "I love JavaScript";
// val = val.toLowerCase();
// let vowels = ["a","e","i","o","u"];
// vowels.forEach((letter,index) =>{
//  console.log(letter);
//  val = val.replaceAll(letter,index);
// });
// console.log(val)

//check if something is a number
// let x = 34;
// console.log(isNaN(x));
// console.log(!isNaN(x));
// let str = "hi";
// console.log(isNaN(str));

// checking if something is finite
// let x = 3;
// let str = "finite";
// console.log(isFinite(x));
// console.log(isFinite(str));
// console.log(isFinite(Infinity));
// console.log(isFinite(10 / 0));

//specifying a number of decimals
// let x = 1.23456;
// let newX = x.toFixed(2); 
// console.log(newX);

// let x = 1.23456;
// let newX = x.toFixed(3); 
// console.log(x, newX);

//specifying precision
// let x = 1.23456;
// let newX = x.toPrecision(4); 
// console.log(newX);//1.235

//Math methods
// let highest = Math.max(2, 56, 12, 1, 233, 4);
// console.log(highest);
// let lowest = Math.min(2, 56, 12, 1, 233, 4);
// console.log(lowest);
// let highestOfWords = Math.max("hi", 3, "bye");
// console.log(highestOfWords);// return NaN

// let result = Math.sqrt(64);
// console.log(result); //8 
// let result2 = Math.pow(5, 3);
// console.log(result2);//raising 5 to the power of 3 =125

//turning decimals into integers
// let x = 6.78;
// let y = 5.34;
// console.log("X:", x, "becomes", Math.round(x));
// console.log("Y:", y, "becomes", Math.round(y));
// console.log("X:", x, "becomes", Math.floor(x));
// console.log("Y:", y, "becomes", Math.floor(y));

//exponent and logarithm
// let x = 2;
// let exp = Math.exp(x);
// console.log("Exp:", exp);
// let log = Math.log(exp);
// console.log("Log:", log);

//practice exercise 8.6
// console.log(Math.ceil(5.7));
// console.log(Math.floor(5.7));
// console.log(Math.round(5.7));
// console.log(Math.random());
// console.log(Math.floor(Math.random()*11)); // 0-10
// console.log(Math.floor(Math.random()*10)+1); // 1-10;
// console.log(Math.floor(Math.random()*100)+1); // 1-100;
// function ranNum(min, max) {
//  return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// for (let x = 0; x < 100; x++) {
//  console.log(ranNum(1, 100));
// }

//date methods
// let currentDateTime = new Date();
// console.log(currentDateTime);
// let now2 = Date.now();
// console.log(now2);

// let d = new Date();
// console.log("Day of week:", d.getDay());
// console.log("Day of month:", d.getDate());
// console.log("Month:", d.getMonth());
// console.log("Year:", d.getFullYear());
// console.log("Seconds:", d.getSeconds());
// console.log("Milliseconds:", d.getMilliseconds());
// console.log("Time:", d.getTime());

//Converting a date to a string
// let d = new Date();
// console.log(d.toDateString());

//Practice exercise 8.7
// let future = new Date(2025, 5, 15);
// console.log(future);
// let months = ["January", "February", "March", "April", "May", "June", 
// "July", "August", "September", "October", "November", "December"];
// let day = future.getDate();
// let month = future.getMonth();
// let year = future.getFullYear();
// let myDate = `${months[month-1]} ${day} ${year}`;
// console.log(myDate);
