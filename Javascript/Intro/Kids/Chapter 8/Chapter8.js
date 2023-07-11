// let ourFirstFunction = function(){
//     alert('Hello');
// }
// ourFirstFunction();

// function ourFirstFunction(){
//     alert("Hello world!")
// }
// ourFirstFunction();

// function sayHello(name){
//     console.log("Hello ", name);
// }
// sayHello("Hadiyo");

// function drawCats(howManyTimes,whatToDraw){
//     for(let i=0; i<howManyTimes; i++){
//     console.log(i, whatToDraw);
// }
// }
// drawCats(15,"00");

// function double(number){
//     return number*2;
// }
// console.log(double(8) + double(10));
// console.log(double(double(3)));

// function product(x,y){
//     return x*y;
// }
// console.log("The product is " + product(14,2));

// function sportsMenAward(recipient, country){
//     let sportsMan = {"recipient": recipient , "country": country}
//     return  sportsMan;
// }
// let LsportsMan = sportsMenAward("Caster Semenya", "South Africa");
// alert(LsportsMan.recipient + " received the an award for the best athlete in 2020");

// function pickRandomWord(words){
//     return words [Math.floor(Math.random()*words.length)];
// }

// let randomBodyParts = ["Face", "Nose", "Hair"];
// let randomAdjectives = ["Smelly", "Boring", "Stupid"];
// let randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];
// // Pick a random body part from the randomBodyParts array:
// let randomBodyPart = pickRandomWord(randomBodyParts);
// // Pick a random adjective from the randomAdjectives array:
// let randomAdjective = pickRandomWord(randomAdjectives);
// // Pick a random word from the randomWords array:
// let randomWord = pickRandomWord(randomWords);
// // Join all the random strings into a sentence:
// let randomString = "Your " + randomBodyPart + " is like a " + randomAdjective + " " + randomWord + "!!!";
// console.log(randomString);

// function fifthLetter(myName) {
//   if (myName.length < 5) {
//     return;
//   }
//   return "The fifth letter of your name is " + myName[4];
// }
// let myName = prompt("What is your name");
// alert(fifthLetter(myName));

// function medalForScore(score){
//     if(score < 3){
//         return "Bronze";
//     }
//     if(score < 7){
//         return "Silver";
//     }
//     return "Gold";
// };
// console.log(medalForScore(10));

// function add(x,y){
//     return x+y;
// }
// function multiply(x,y){
//     return x*y;
// }
// let result = add(multiply(36325,9824),777);
// console.log(result);

// function areArraysSame(arry1,arry2){
//     if(arry1.length !== arry2.length){
//         return "false";
//     }
//     for(let i = 0; i < arry1.length; i++){
//         if(arry1[i] !== arry2[i]){
//             return "false";
//         }
//     }
//     return true;
// } 
// console.log(areArraysSame([1,2,3],[4,5,6])),
// console.log(areArraysSame([1,2,3],[1,2,3]));
// console.log(areArraysSame([1,2,3],[1,2,3,4]));

let words = ["miracle", "bottle", "spider", "capital"];
let word = pickWord();

let answerArray = [];
setupAnswerArray();

let guessRemaining = 7;
let remainingLetters = word.length;
let guess;
while (remainingLetters > 0 && guessRemaining > 0) {
showPlayerProgress();

  guess = getGuess();
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert("Please enter a single letter");
  } else {
    updateGameState();
      }
    }
    showAnswerAndCongratulatePlayer();
    
function pickWord() {
  return words[Math.floor(Math.random() * words.length)];
 };

  function setupAnswerArray() {
  // Return the answer array
  for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
  }
 };

 function showPlayerProgress() {
  // Use alert to show the player their progress
  alert(answerArray.join(" "));
 };

 function getGuess() {
  // Use prompt to get a guess
  return prompt("Guess a letter, or click Cancel to stop playing. ");
 };
 function updateGameState () {
  // Update answerArray and return a number showing how many
  // times the guess appears in the word so remainingLetters
  // can be updated
  guess = guess.toLowerCase();
    guessRemaining--;
    for (let j = 0; j < word.length; j++) {
      if (word[j] === guess) {
        if (answerArray[j] === "_") {
          answerArray[j] = guess;
          remainingLetters--;
        } else {
          alert("You have already guessed this letter");
        }
      }
    }
 };

 function showAnswerAndCongratulatePlayer() {
  // Use alert to show the answer and congratulate the player
  if (guess === null) {
    alert("You quit");
  } else if (guessRemaining === 0) {
    alert("You ran out of guesses");
  } else {
    alert("Congratulations! You guessed correctly!");
  }
 };
 