var wins = 0;
var numGuesses = 0;
var lettersGuessed = [];


//press any key to begin



//takes an input from the user and stores it in an array, will not repeat the same choice more than once
document.onkeyup = function (event) {
    var userInput = event.key;
    
    
    if ( (lettersGuessed.indexOf(userInput) < 0) ) {
    
       
        console.log(typeof userInput)
        
        lettersGuessed.push(userInput);
        
        var lettersChosenNode = document.createTextNode(" " + lettersGuessed[lettersGuessed.length -1]);
        document.getElementById("letters").appendChild(lettersChosenNode);
        
    }
    
    console.log(lettersGuessed);
};



//list of words to guess




//display word to guess using _ _ _ _


//check to see if userInput is in the word

