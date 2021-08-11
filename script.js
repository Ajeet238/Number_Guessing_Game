var computerGuess;
var userGuesses = [];
var maxGuesses;
var attempts = 0;

let low = 1;
let high = 100;

function updateRange() {
    const rangeOutput = document.getElementById("rangeOutput");
    rangeOutput.innerText = `${low} - ${high}`;
    rangeOutput.style.marginLeft = low + "%";
    rangeOutput.style.marginRight = 100-high + "%";

    const lowValue = document.getElementById("low");
    lowValue.style.flex = low + "%";

    const spaceValue = document.getElementById("space");
    spaceValue.style.flex = high - low + 100 + "%";

    const highValue = document.getElementById("high");
    highValue.style.flex = 100 - high + "%";
}


function newGame() {
    window.location.reload();
}

function gameEnd() {
    document.getElementById("newGameButton").style.display = "inline";
    document.getElementById("inputBox").setAttribute("readonly", "readonly");
}

function init() {
    computerGuess = Math.floor(Math.random() * 100 + 1);
    console.log(computerGuess);
    document.getElementById("gameArea").style.display = "none";
    document.getElementById("newGameButton").style.display = "none";

}

function startGameView() {
    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("gameArea").style.display = "block";
}

function easyMode() {
    maxGuesses = 10;
    startGameView();

}
function hardMode() {
    maxGuesses = 5;
    startGameView();
}
function compareGuess() {
    const userGuess = Number(document.getElementById("inputBox").value);
    userGuesses.push(" " + userGuess);
    attempts++;
    document.getElementById("attempts").innerText = attempts;
    if (attempts < maxGuesses) {
        document.getElementById("guesses").innerHTML = userGuesses;
        if (userGuess > computerGuess) {
            if(userGuess<high){
                high = userGuess;
            }
           
            document.getElementById("textOutput").innerHTML = "Your Guess Is Too High!!";
            document.getElementById("inputBox").value = "";
        }
        else if (userGuess < computerGuess) {
            if(userGuess>low){
                low = userGuess;
            }
            
            document.getElementById("textOutput").innerHTML = "Your Guess Is Too Low!!";
            document.getElementById("inputBox").value = "";
        }
        else {
            document.getElementById("textOutput").innerHTML = "Correct! You got it in " + attempts + " attempts";
            gameEnd();
        }
    }
    else {
        if (userGuess > computerGuess || userGuess < computerGuess) {
            document.getElementById("textOutput").innerHTML = "You Lose! The number was " + computerGuess;
            gameEnd();
        }
        else {
            document.getElementById("textOutput").innerHTML = "Correct! You got it in " + attempts + " attempts";
            gameEnd();
        }

    }
    updateRange();
}
