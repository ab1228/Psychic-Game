//////////////////////////////////////////////////////
// letters array
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g',
    'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
    'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// universal var
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var letterUser = [];
var eachofLetters = null;


// set computer random letter for guesses
var computerGuess = letters[Math.floor(Math.random() * letters.length)];

function countGuessesLeft() {
    document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
}

function forUserGuesses() {
    document.querySelector("#letters").innerHTML = "Your guesses so far: " + letterUser.join(' ');
}

countGuessesLeft();

var restart = function () {
    guessesLeft = 10;
    letterUser = [];
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}
// set onkeyevent for wins and loses
document.onkeyup = function (event) {
    guessesLeft--;

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    letterUser.push(userGuess);
    countGuessesLeft();
    forUserGuesses();

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

