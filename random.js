/*
The Random Number Guessing Game
Generate a number between 1 and 6
gives a player two attemtps to guess
*/

//assume the player didnt guess correctly
var correctGuess = false;


//gen number 
var ranNumber = Math.floor(Math.random()*6)+1;

//test to see if the guess is correct
var guess = prompt("I am thinking of a number between 1 and 6. What is it?");
if (parseInt(guess) === ranNumber) {
    correctGuess = true;
} else if (parseInt(guess) < ranNumber) {
    var guessAgain = prompt("The guess number is greater than "+ guess);
    if (parseInt(guessAgain) === ranNumber) {
        correctGuess = true;
    }
} else if (parseInt(guess) > ranNumber) {
    var guessAgain = prompt("The guess number is smaller than "+ guess);
    if (parseInt(guessAgain) === ranNumber) {
        correctGuess = true;
    }
}  


//output
if (correctGuess) {
    document.write("<p>You guessed the Number!</p>");
} else {
    document.write("<p>Sorry,The number was " + ranNumber + "</p>");
}
