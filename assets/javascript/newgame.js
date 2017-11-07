var hang = {
    wordList: ["one", "two", "three", "four"],
    guessesLeft: 8,
    currentWord: [],
    emptyWord: [],
    indexes: [],
    lettersUsed: "",
    wins: 0,
    losses: 0,

    createWord: function() {
        hang.currentWord = hang.wordList[Math.floor(Math.random() * hang.wordList.length)];
        //hang.currentWord = String(hang.currentWord);
        for (var i = 0; i < hang.currentWord.length; i++) {
            hang.emptyWord[i] = "_";
        }

        //hang.emptyWord = hang.emptyWord.join(" ");
        console.log(hang.emptyWord);
        return hang.emptyWord;
    },

    getIndexes: function(guess) {
        var i;
        for (i = 0; i < hang.currentWord.length; i++) {
            if (hang.currentWord[i] === guess)
                hang.indexes.push(i);
        }
        console.log(hang.indexes);
        hang.replace(guess);
    },

    replace: function(guess) {
        //take the indexes array (contains a list of the indexes with the letter guessed) and replace the emptyWord array with that letter for each index
        var j;
        for (j = 0; j < hang.indexes.length; j++) {
            hang.emptyWord[hang.indexes[j]] = guess;
        }
        console.log(hang.emptyWord);
        hang.indexes = [];
    },

    checkLetter: function(guess) {
        if (hang.lettersUsed.includes(guess)) {
            alert("You already guessed " + guess + "!");
        }

        else if (hang.currentWord.indexOf(guess) == -1) {
            hang.lettersUsed = hang.lettersUsed + " " + guess;
            hang.guessesLeft--;
        }

        else {
            hang.lettersUsed = hang.lettersUsed + " " + guess;
            hang.getIndexes(guess);
        }
    },

    reset: function() {
        hang.currentWord = hang.wordList[Math.floor(Math.random() * hang.wordList.length)];
        hang.lettersUsed = "";
        hang.emptyWord = [];
        hang.guessesLeft = 8;
        hang.createWord();

    }
};

document.getElementById("game").innerHTML = hang.createWord();
document.onkeyup = function(event) {


    var guess = String.fromCharCode(event.keyCode).toLowerCase();

    hang.checkLetter(guess);

    if (hang.guessesLeft === 0) {
        alert("Good attempt! The correct word was '" + hang.currentWord + "'!");
        hang.losses++;
        hang.reset();
    }

    else if (hang.emptyWord == hang.currentWord) {
        alert("Great job! You win!");
        hang.wins++;
        hang.reset();
    }
    else {}

    var html = hang.emptyWord + "<p>You chose: " + guess + "</p>" +
        "<p>Letters guessed: " + hang.lettersUsed + "</p>" +
        "<p>Guesses left: " + hang.guessesLeft + "</p>" +
        "<p>Wins: " + hang.wins + "</p>" +
        "<p>Losses: " + hang.losses + "</p>";

    document.querySelector("#game").innerHTML = html;
};
