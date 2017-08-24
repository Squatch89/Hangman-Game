var wins = 0;
var losses = 0;
var guessesLeft = 10;
var lettersGuessed = [];
var allowedChoices =  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var words = ["feta", "gouda", "cheddar", "swiss", "gorgonzola", "mozzarella"];

//chooses a letter to be guessed
var selectedWord = words[Math.floor((Math.random() * (words.length - 1)))];
console.log(selectedWord + " this is the selected word");

//displays _ _ _ for the length of the selected word
function wordDisplay () {
    var wordNode = document.createTextNode(selectedWord);
    document.getElementById("word").appendChild(wordNode);
    //display _ _ _ _ for each letter iof the selectedWord
}

//displays wins losses and guesses left
var guessesLeftNode = document.createTextNode(guessesLeft);
document.getElementById("guessesLeft").appendChild(guessesLeftNode);

var winsNode = document.createTextNode(wins);
document.getElementById("wins").appendChild(winsNode);

// var lossesNode = document.createTextNode(losses);
// document.getElementById("losses").appendChild(lossesNode);




function resetGame () {
    guessesLeft = 10;
    lettersGuessed = [];
    document.getElementById("letters").textContent = lettersGuessed;
    document.getElementById("guessesLeft").textContent = guessesLeft;
    selectedWord = words[Math.floor((Math.random() * (words.length - 1)))];
    console.log(selectedWord + " this is the selected word");
}

//displays the letters guessed
document.onkeyup = function (event) {
    var userInput = event.key;
    
    
    if ( (lettersGuessed.indexOf(userInput) < 0) && (allowedChoices.indexOf(userInput) >= 0) ) {
        
        
        // console.log(typeof userInput + " this was the user input");
        
        lettersGuessed.push(userInput);
        
        var lettersChosenNode = document.createTextNode(" " + lettersGuessed[lettersGuessed.length - 1]);
        document.getElementById("letters").appendChild(lettersChosenNode);
        
        //checks for win and loss conditions and updates the values displayed
        if (String(lettersGuessed[lettersGuessed.length - 1]) === String(selectedWord)) {
            wins++;
            console.log(wins + " this was a win");
            document.getElementById("wins").textContent = wins;
            resetGame();
        }
        else
        {
            guessesLeft--;
            console.log(guessesLeft + " this was a guess");
            document.getElementById("guessesLeft").textContent = guessesLeft;
        }
        
        console.log(lettersGuessed);
        //determines if you have lost and updates score if so
        if (guessesLeft === 0)
        {
            losses++;
            console.log(losses + " this was a loss");
            resetGame();
        }
    }
    
  
    
};

 