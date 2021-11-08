/* This program challenges the user to guess a randomly generated number
 * within a range chosen by the user. Basic user input is validated to 
 * ensure numbers are entered and there are no guessing range violations
 * (such as choosing a number outside the high or low boundary of the range). 
 */

var intMax, intMin, intRandom, intGuess, intCount;

/* the following section prompts the user to enter the low number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 0.
*/

intMin = parseInt(prompt("Choose the lowest number (but no lower than 0) in your guessing range: "));

while (intMin < 0 || isNaN(intMin)) {
    intMin = parseInt(prompt("Invalid lower bound \n Enter the lower number of your guessing range: "));
}

/* the following section prompts the user to enter the high number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 2 more than the minimum (so that there is some guessing involved).
*/

intMax = parseInt(prompt("Choose the highest number in your guessing range:\nNote: your highest number must be at least 2 more than 0 "));

while (intMax < intMin + 2 || isNaN(intMax)) {
    intMax = parseInt(prompt("Invalid upper bound.\nPlease enter an upper bound for your guessing range that is at least 2 above " + intMin +" : "));
}

/*The following line of code generates the random number to be used in the guessing game.
 * Math.floor rounds the random number down to the nearest integer
 * Math.random() generates a random number between 0 and 1
 * the portion of (intMax-intMin +1) provides the range of random values
 * the addition of + intMin provides the floor for the random number 
 */

intRandom = parseInt (Math.floor(Math.random()*(intMax-intMin+1))+intMin);

// set the loop counter

/* the following section prompts the user to enter their guess
 * and then validates that the user entered an actual number and makes sure that the
 * number is between the allowed max and min number choices.
*/

intGuess = parseInt(prompt("What is your guess on the random number between: \n" + intMin + " and " + intMax));

function guessValidation(intGuess) {
    while (intGuess < intMin || intGuess > intMax || isNaN(intGuess)) {
        intGuess = parseInt(prompt("Invalid random number guess. \n Please enter a new number, within the bounds, you want to guess: "));
    }
    return intGuess;
}

/* The following section provides the main loop and logic for the program.
 * The user's guess is compared to the randomly generated number and feedback
 * is given based upon whether the guess is higher or lower. The loop exits when
 * the user chooses the correct number. Each time through the loop updates the loop counter.
 */

// Changed the while loop to a for loop for conciseness

for (intCount = 1; intRandom != intGuess; intCount++) {
    if (intRandom > intGuess) {
        alert("Your choice of " + intGuess + " is too low! Please try again.");
        
        intGuess = parseInt(prompt("Enter numeric value of your guess: "));
        
        guessValidation(intGuess);
    }
    
    else {
        alert("Your choice of " + intGuess + " is too high! Please try again.");
        
        intGuess = parseInt(prompt("Enter numeric value of your guess: "));
        
        guessValidation(intGuess);
    }
    
 }

// provides final output upon successful guessing
alert("Congratulations!!! You guessed the correct number (" + intRandom +")\n" +
		" and it only took you " + intCount + " attempts!");
