var wins = 0;
var losses = 0;
var guessesLeft = 10;
var lettersGuessed = [];
var allowedChoices =  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var words = ["feta", "gouda", "cheddar", "swiss", "gorgonzola", "mozzarella", "brie", "provolone", "manchego", "asiago", " ricotta", "pecorino"];

//chooses a letter to be guessed
var selectedWord = words[Math.floor((Math.random() * (words.length)))];
console.log(selectedWord + " this is the selected word");

//displays _ _ _ for the length of the selected word
var underscore = Array.from('_'.repeat(selectedWord.length));
window.onload = function() {
    //shows underscore placeholders
    document.getElementById("word").textContent = underscore.join(' ');
};

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
    underscore = Array.from('_'.repeat(selectedWord.length));
    selectedWord = words[Math.floor((Math.random() * (words.length - 1)))];
    document.getElementById("letters").textContent = lettersGuessed;
    document.getElementById("guessesLeft").textContent = guessesLeft;
    document.getElementById("word").textContent = underscore.join(' ');
    console.log(selectedWord + " this is the selected word");
}

//displays the letters guessed
document.onkeyup = function (event) {
    var userInput = event.key;
    
    if ((lettersGuessed.indexOf(userInput) < 0) && (allowedChoices.indexOf(userInput) >= 0)) {
        
        
        // console.log(typeof userInput + " this was the user input");
        
        lettersGuessed.push(userInput);
        
        var lettersChosenNode = document.createTextNode(" " + lettersGuessed[lettersGuessed.length - 1]);
        document.getElementById("letters").appendChild(lettersChosenNode);
    
       
        
        //checks for win and loss conditions and updates the values displayed
        if (selectedWord.includes(lettersGuessed[lettersGuessed.length - 1]) === true) {
            console.log(" yay we made a match");
            
            for (var i = 0; i < selectedWord.length; i++) {
                
                if (selectedWord[i] === lettersGuessed[lettersGuessed.length -1]) {
                    underscore[i] = lettersGuessed[lettersGuessed.length - 1];
                    document.getElementById("word").textContent = underscore.join(" ");
                }
                if (underscore.join("") === selectedWord){
                    wins++;
                    document.getElementById("wins").textContent = wins;
                    resetGame();
                }
            }
        }
        
        else {
            guessesLeft--;
            console.log(guessesLeft + " this was a guess");
            document.getElementById("guessesLeft").textContent = guessesLeft;
        }
        
        console.log(lettersGuessed);
        //determines if you have lost and updates score if so
        if (guessesLeft === 0) {
            losses++;
            console.log(losses + " this was a loss");
            resetGame();
        }
    }
    
    
};

 