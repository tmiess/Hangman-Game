var words = ["one", "two", "three", "four"];
var newWord;
var empty = "";
var guessesLeft = 10;
var lettersUsed = "";
var wins = 0;
var losses = 0;

function startGame() {
    newWord = words[Math.floor(Math.random() * words.length)];
    for (var i = 0; i < newWord.length; i++) {
        empty = empty + "-";
    }
    return empty;
}

function reset() {
    newWord = words[Math.floor(Math.random() * words.length)];
    lettersUsed = "";
    empty = "";
    guessesLeft = 10;

    for (var i = 0; i < newWord.length; i++) {
        empty = empty + "-";
    }

    getIndexes: function(letter) {
            var i;
            for (i = 0; i < this.currentWord.length; i++) {
                if (this.currentWord[i] === letter)
                    this.indexes.push(i);
            }
        },

        replace: function(letter) {
            //take the indexes array (contains a list of the indexes with the letter guessed) and replace the emptyWord array with that letter for each index
            var j;
            for (j = 0; j < this.indexes.length; j++) {
                this.emptyWord[this.indexes[j]] === letter;
            }
        },

        checkLetter: function(letter) {
            if (this.currentWord.indexOf(letter) == -1) {
                this.guessesLeft--;
            }
            else {
                this.getIndexes(letter);
            }
        },
}

document.getElementById("game").innerHTML = startGame();

document.onkeyup = function(event) {


    var guess = String.fromCharCode(event.keyCode).toLowerCase();

    var html = empty + "<p>You chose: " + guess + "</p>" +
        "<p>Letters guessed: " + lettersUsed + "</p>" +
        "<p>Guesses left: " + guessesLeft + "</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>";

    document.querySelector("#game").innerHTML = html;

    if (guessesLeft === 0) {
        alert("Good attempt! The correct word was '" + newWord + "'!");
        losses++;
        reset();
    }

    else if (empty === newWord) {
        wins++;
        alert("Great job! You win!");
        reset();
    }

    else if (lettersUsed.includes(guess)) {
        alert("You already guessed " + guess + "!");
    }

    else if (newWord.indexOf(guess) === -1) {
        lettersUsed = lettersUsed + " " + guess;
        guessesLeft--;
    }

    else {
        for (var j = 0; j < length.empty; j++) {
            if (newWord[j] == guess) {
                empty[j] = guess;
                console.log(empty[j]);
            }
            empty[j] = guess;
            console.log(empty[j]);
        }

        // if (newWord.includes(guess))
        //    empty.indexOf(guess) = guess; ???

        lettersUsed = lettersUsed + " " + guess;
        return empty;
    }



}
