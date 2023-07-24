// function doSomething(callback) {
//     callback();
//    }
//    function sayHi() {
//     console.log("Hi!");
// }
// doSomething(sayHi);// callback

// function judge(grade) {
//   switch (grade) {
//     case "A":
//       console.log("You got an", grade, ": amazing!");
//       break;
//     case "B":
//       console.log("You got a", grade, ": well done!");
//       break;
//     case "C":
//       console.log("You got a", grade, ": alright.");
//       break;
//     case "D":
//       console.log("You got a", grade, ": hmmm...");
//       break;
//     default:
//       console.log("An", grade, "! What?!");
//   }
// }
// function getGrade(score, callback) {
//   let grade;
//   switch (true) {
//     case score >= 90:
//       grade = "A";
//       break;
//     case score >= 80:
//       console.log(score);
//       grade = "B";
//       break;
//     case score >= 70:
//       grade = "C";
//       break;
//     case score >= 60:
//       grade = "D";
//       break;
//     default:
//       grade = "F";
//   }
//   callback(grade);
// }
// getGrade(85, judge);

//functions inserted as arguments are called call backs
// setInterval(encourage, 500);
// function encourage() {
//   console.log("You're doing great, keep going!");
// } //execute the function after 500ms

//Practice exercise 13.1
// splitName("Hadiyo Letsitsi", greet);

// function splitName(stringFullName, callback) {
//   let arrayfullName = stringFullName.split(" ");
//   callback(arrayfullName);
// }

// function greet(arrayfullName) {
//   console.log(`Hello ${arrayfullName[0]} ${arrayfullName[1]}`);
// }

//my example
// function fetch(myList){
// console.log(`Buy ${myList[0]} and ${myList[1]} from the store`);
// }

// function splitName(splitList, callback){
//     let myList = splitList.split(" ");
//     callback(myList);
// }

// splitName("Fruits Veggies", fetch);

// let promise = new Promise(function (resolve, reject) {
//   // do something that might take a while
//   // let's just set x instead for this example
//   let x = 20;
//   if (x > 10) {
//     resolve(x); // on success
//   } else {
//     reject("Too low"); // on error
//   }
// });
// promise.then(//only does .then for resolve
//   function (value) {
//     console.log("Success:", value);
//   }
// //   function (error) { //if you dont have error function,return uncaught error
// //     console.log("Error:", error);
// //   }
// ).catch(error => console.log(error));//return too low

// const promise = new Promise((resolve, reject) => {
//   resolve("success!");
// })
//   .then((value) => {
//     console.log(value);
//     return "we";
//   })
//   .then((value) => {
//     console.log(value);
//     return "can";
//   })
//   .then((value) => {
//     console.log(value);
//     return "chain";
//   })
//   .then((value) => {
//     console.log(value);
//     return "promises";
//   })
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((value) => {
//     console.log(value);
//   });

//Practice 12.3
// function counter(val){
//     console.log(val);
// }

//  let promise = new Promise(function(resolve, reject){
//     resolve("Start Counting");
//  });
//  promise.then(val => {
//     counter(val);
//     return "One"
//  })
//  .then(val => {
//     counter(val);
//     return "Two"
//  })
//  .then(val => {
//     counter(val);
//     return "Three"
//  })
//  .then(val => {
//     counter(val);
//  })
//  .catch(error => console.log(error));

//async and await
// function saySomething(x) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("something" + x);
//     }, 2000);
//   });
// }
// async function talk(x) {
//   const words = await saySomething(x);
//   console.log(words);
// }
// talk(2);
// talk(4);
// talk(8);

//Practice exercise 13.3
// let counter = 0;
// function outputTime(val) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       counter++;
//       resolve(`x value ${val} counter:${counter}`);
//     }, 1000);
//   });
// }
// async function aCall(val) {
//   console.log(`ready ${val} counter:${counter}`);
//   const res = await outputTime(val);
//   console.log(res);
// }
// for (let x = 1; x < 4; x++) {
//   aCall(x);
// }

//Event Loop
//JavaScript works with a call stack, and all the actions that it has to execute are queued up here
// console.log("Hi there");
// setTimeout(() => console.log("Sorry I'm late"), 1000);//run this last since call back queue is done last
// console.log(add(4, 5));
// function add(x, y) {
//  return x + y;
// }
