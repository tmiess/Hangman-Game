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
        this.currentWord = this.wordList[Math.floor(Math.random() * this.wordList.length)];
        this.currentWord = String(this.currentWord);
        for (var i = 0; i < this.currentWord.length; i++) {
            this.emptyWord[i] = "_";
        }

        this.emptyWord = this.emptyWord.join(" ");
        return this.emptyWord;
    },

    getIndexes: function(guess) {
        var i;
        for (i = 0; i < this.currentWord.length; i++) {
            if (this.currentWord[i] === guess)
                this.indexes.push(i);
        }
        this.replace(guess);
    },

    replace: function(guess) {
        //take the indexes array (contains a list of the indexes with the letter guessed) and replace the emptyWord array with that letter for each index
        var j;
        for (j = 0; j < this.indexes.length; j++) {
            this.emptyWord[this.indexes[j]] = guess;
        }
        return this.emptyWord;
    },

    checkLetter: function(guess) {
        if (this.lettersUsed.includes(guess)) {
            alert("You already guessed " + guess + "!");
        }

        else if (this.currentWord.indexOf(guess) == -1) {
            this.lettersUsed = this.lettersUsed + " " + guess;
            this.guessesLeft--;
        }

        else {
            this.lettersUsed = this.lettersUsed + " " + guess;
            this.getIndexes(guess);
        }
    },

    reset: function() {
        this.currentWord = this.wordList[Math.floor(Math.random() * this.wordList.length)];
        this.lettersUsed = "";
        this.emptyWord = [];
        this.guessesLeft = 8;
        this.createWord();

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

    else if (hang.emptyWord === hang.currentWord) {
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
