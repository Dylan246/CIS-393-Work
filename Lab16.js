function playGuessingGame(numToGuess, totalGuesses) {
    if (totalGuesses == null) {
        totalGuesses = 10; //Default to 10
    }

    for (let i = 1; i <= totalGuesses;) {
        if (i == 1) {
            theString = "Enter a number between 1 and 100.";
        }
        let box = prompt(theString);
        if (box == null) {
            return 0;
        } else if ((isNaN(box) == true) || box == "") {
            theString = "Please enter a number."

        } else if (box < numToGuess) {
            theString = box + " is too small. Guess a larger number."
            i++;
        } else if (box > numToGuess) {
            theString = box + " is too large. Guess a smaller number."
            i++;
        } else if (box == numToGuess) {
            return i;
        }
    }
    return 0;
}