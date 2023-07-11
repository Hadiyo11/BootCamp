 function pickWord() {
      let words = [
        "javascript",
        "monkey",
        "amazing",
        "pancake"
      ];

      return words[Math.floor(Math.random() * words.length)];
    };

    let setupAnswerArray = function (word) {
      var answerArray = [];
      for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
      }

      return answerArray;
    };

    var showPlayerProgress = function (answerArray) {
      alert(answerArray.join(" "));
    };

    var getGuess = function () {
      return prompt("Guess a letter, or click Cancel to stop playing.");
    };

    var updateGameState = function (guess, word, answerArray) {
      var appearances = 0;
      for (var j = 0; j < word.length; j++) {
        if (word[j] === guess) {
          answerArray[j] = guess;
          appearances++;
        }
      }

      return appearances;
    };

    function showAnswerAndCongratulatePlayer() {
      if (guess === null) {
        alert("You quit");
      } else if (guessRemaining === 0) {
        alert("You ran out of guesses");
      } else {
        alert("Congratulations! You guessed correctly!");
      }
    };

    var word = pickWord();
    var answerArray = setupAnswerArray(word);
    var remainingLetters = word.length;

    while (remainingLetters > 0) { showPlayerProgress(answerArray); var guess = getGuess();
      if (guess === null) {
        break;
      } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
      } else {
        var correctGuesses = updateGameState(guess, word, answerArray);
        remainingLetters -= correctGuesses;
      }
    }

    console.log(showAnswerAndCongratulatePlayer(answerArray));
    