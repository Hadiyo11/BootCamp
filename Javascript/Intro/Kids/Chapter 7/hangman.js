// let words = ["javascript", "monkey", "amazing", "cucpcake"];
// let word = words[Math.floor(Math.random() * words.length)];
// let answerArray = [];
// for (let i = 0; i < word.length; i++) {
//   answerArray[i] = "_";
// }
// let remainingLetters = word.length;
// let guess;
// while (remainingLetters > 0) {
//   alert(answerArray.join(" "));
//   guess = prompt("Guess a letter, or click Cancel to stop playing. ");
//   if (guess === null) {
//     break;
//   } else if (guess.length > 1) {
//     alert("Please enter a single letter.");
//   } else {
//     if they guessed correctly
// guess =  guess.toLowerCase();
//   for(let j=0; j <word.length;  j++){
//     if(word[j] === guess){
//         answerArray[j]= guess;
//         remainingLetters--;
//     }
//   }
//   }
// }
// if(guess === null){
//     alert("You quit");
// } else{
//     alert("Congratulations!");
// }
let words = ["miracle", "bottle", "spider", "capital"];
let word = words[Math.floor(Math.random() * words.length)];
let answerArray = [];
let guessRemaining = 7;
for (let i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}
let remainingLetters = word.length;
let guess;
while (remainingLetters > 0 && guessRemaining > 0) {
  alert(answerArray.join(" "));
  guess = prompt("Guess a letter, or click Cancel to stop playing. ");
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert("Please enter a single letter");
  } else {
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
  }
}
if (guess === null) {
  alert("You quit");
} else if (guessRemaining === 0) {
  alert("You ran out of guesses");
} else {
  alert("Congratulations! You guessed correctly!");
}
