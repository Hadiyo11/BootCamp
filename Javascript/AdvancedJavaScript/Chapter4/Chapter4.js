// let rain = true;
// if(rain){
//  console.log("** Taking my umbrella when I need to go outside **");
// } else {
//  console.log("** I can leave my umbrella at home **");
// }

//  let age = 20;
// if(age < 18) {
//     console.log("We're very sorry, but you can't get in under 18");
//    } else {
//     console.log("Welcome!");
//    }

// let hobby = "dancing";
// if(hobby = "coding"){
//  console.log("** I love coding too! **");
// } else {
//  console.log("** Can you teach me that? **");
// }
// It will log the following: ** I love coding too! **That might surprise you. The problem here is the single equal sign in the if statement. Instead of evaluating the condition, it is assigning coding to hobby. And
// then it is converting coding to a Boolean, and since it is not an empty string, it will
// become true, so the if block will be executed. So, always remember to use the double
// equal sign in this case

// let age = prompt("What is your age?");
// let cost = 0;
// let message;
// if (age < 3) {
//  cost = 0;
//  message = "Access is free under three.";
// } else if (age >= 3 && age < 12) {
//  cost = 5;
//  message ="With the child discount, the fee is 5 dollars";
// } else if (age >= 12 && age < 65) {
//  cost = 10;
//  message ="A regular ticket costs 10 dollars.";
// } else {
//     cost = 7;
//     message ="A ticket is 7 dollars.";
//    }
//    console.log(message);
//    console.log("Your Total cost "+cost);

// Conditional ternary operators
// operand1 ? operand2 : operand3;
// operand1 is the expression that is to be evaluated. If the value of the expression is true, operand2 gets executed. If the value of the expression is false, operand3 gets executed.
// let age = prompt("What is your age?");
// let access = age < 18  ? "denied" : "allowed";
// alert(access);

//Practice exercise 4.3
// let validID = confirm("Do you have a valid ID?");
// let message = (validID) ? "You are allowed entry" : "You are denied entry";
// alert(message);

//Practice exercise 4.4
// let num = Math.floor(Math.random() * 6);
// let question = prompt("Ask me a question.");
// let message;
// switch(num){
//     case 0:
// message = `${question} I do not know`;
// break;
// case 1:
// message = `${question} Ask me later`;
// break;
// case 3:
// message = `${question} I am not sure`;
// break;
// case 4:
// message = `${question} I will think about it`;
// break;
// case 5:
// message = `${question} I am busy`;
// break;
// case 6:
// message = `${question} I have a headache`;
// break;
// }
// alert(message);

// let grade = prompt(
//   "What grade did you get? A, B, C, D, E ,F"
// ).toUpperCase;

// switch (grade) {
//   case "A":
//     alert("You did good");
//     break;
//   case "B":
//   case "C":
//     alert("You passed");
//     break;
//   case "D":
//   case "E":
//   case "F":
//     alert("You failed");
//     break;
//   default:
//     alert("I do not know that grade");
//     break;
// }

// let prize = Number(prompt("Enter a number between 1 and 10."));
// let message = "My Selection: ";

// switch(prize) {
//     case 1:
//         case 2:
//         message += "You won a teddybear";
//         break;
//         case 3: 
//         case 4:
//         message += "You won a trip to Cape Town";
//         break; 
//         case 5:
//             case 6: 
//             message += "You won a red BMW";
//             break;
//             case 6: 
//             case 7: 
//             message += "You won a house";
//             break; 
//             case 8: 
//             case 9: 
//             message += "You won a voucher";
//             break;
//             case 10:
//                 message += "You won a movie ticket";
//                 break;
//                 default:
//                     message += "Try again"
//                     break;
// }

// alert(message);

// let login = false;
// let outputHolder = "";
// let userOkay = login ? outputHolder = "logout" : outputHolder = 
// "login";
// console.log(userOkay);