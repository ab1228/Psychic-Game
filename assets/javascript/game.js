// letters array
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',
    'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// universal var
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var letterUser = [];
var eachofLetters = null;


// set computer random letter for guesses
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

function guessesLeft() {
    document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
}

function UserGuesses() {
    document.querySelector("#letter").innerHTML = "Your guesses so far: " + letterUser.join(' ');
}

countGuessesLeft();

var restart = function () {
    guessesLeft = 10;
    letterUser = [];
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

// set onkeyevent for wins ans loses
document.onkeyup = function (event) {
    guessesLeft--;

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    letterUser.push(userGuess);
    countGuessesLeft();
    farUserGuesses();

    if (userGuess === computerGuess) {
        wins++;
        document.querySelector("#wins").innerHTML = "Wins: " + wins;
        restart();
    }
    else if (guessesLeft === 0) {
        losses++;
        document.querySelector("#lose").innerHTML = "Loses: " + losses;
        restart();
    }
};
