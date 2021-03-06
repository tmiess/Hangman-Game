var hang = {
    alphabet: "abcdefghijklmnopqrstuvwxyz",
    wordList: ["hornet", "heat", "magic", "hawks", "wizard", "six", "net", "knickerbocker", "celtic", "piston", "cavalier", "pacer", "grizzly", "pelican", "bull", "lake", "clipper", "king", "blazer", "thunder", "sonic", "wolves", "jazz", "sun", "spur", "rocket", "maverick", "warrior", "bullet", "raptor", "nugget", "buck"],
    guessesLeft: 8,
    currentWord: [],
    emptyWord: [],
    indexes: [],
    lettersUsed: "",
    wins: 0,
    losses: 0,

    createWord: function() {
        hang.currentWord = hang.wordList[Math.floor(Math.random() * hang.wordList.length)];
        for (var i = 0; i < hang.currentWord.length; i++) {
            hang.emptyWord[i] = "-";
        }
        console.log("emptyWord:" + hang.emptyWord);
        console.log("currentWord:" + hang.currentWord);
        return hang.emptyWord.join("");
    },

    checkLetter: function(guess) {
        if (hang.alphabet.includes(guess)) {
            console.log("letter guessed:" + guess);
            if (hang.lettersUsed.includes(guess)) {
                alert("You already guessed " + guess + "!");
            }

            else if (hang.currentWord.indexOf(guess) == -1) {
                hang.lettersUsed = hang.lettersUsed + " " + guess;
                hang.guessesLeft--;
                console.log("indexOf(guess):" + -1);
            }

            else {
                hang.lettersUsed = hang.lettersUsed + " " + guess;
                hang.getIndexes(guess);
            }
        }
        else {
            alert("Not a letter! Try again.");
        }
    },

    getIndexes: function(guess) {
        for (var j = 0; j < hang.currentWord.length; j++) {
            if (hang.currentWord[j] === guess)
                hang.indexes.push(j);
        }
        console.log(hang.indexes);
        hang.replace(guess);
    },

    replace: function(guess) {
        console.log("indexes:" + hang.indexes);
        //hang.indexes = String(hang.indexes);
        for (var k = 0; k < hang.indexes.length; k++) {
            hang.emptyWord[hang.indexes[k]] = guess;
            console.log(hang.emptyWord);
        }
        console.log(hang.emptyWord);
        hang.indexes = [];
        return String(hang.emptyWord);
    },

    reset: function() {
        hang.currentWord = hang.wordList[Math.floor(Math.random() * hang.wordList.length)];
        hang.lettersUsed = "";
        hang.emptyWord = [];
        hang.guessesLeft = 8;
        hang.createWord();

    }
};

document.getElementById("wordDisplay").innerHTML = hang.createWord();

document.onkeyup = function(event) {

    var guess = String.fromCharCode(event.keyCode).toLowerCase();

    hang.checkLetter(guess);

    var html = "<p>You chose: " + guess + "</p>" +
        "<p>Letters guessed: " + hang.lettersUsed + "</p>" +
        "<p>Guesses left: " + hang.guessesLeft + "</p>" +
        "<p>Wins: " + hang.wins + "</p>" +
        "<p>Losses: " + hang.losses + "</p>";

    document.querySelector("#wordDisplay").innerHTML = hang.emptyWord.join("");
    document.querySelector("#game").innerHTML = html;

    if (hang.guessesLeft === 0) {
        alert("Good attempt! The correct word was " + hang.currentWord + "'!");
        hang.losses++;
        hang.reset();
    }

    else if (String(hang.emptyWord.join("")) === hang.currentWord) {
        alert("Great job! The word was " + hang.currentWord + "!");
        hang.wins++;
        hang.reset();
    }
    else {}
};
