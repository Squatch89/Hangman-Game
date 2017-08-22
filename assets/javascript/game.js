

//press any key to begin
//     window.onkeypress = function () {
    
        var wins = 0;
        var numGuesses = 10;
        var lettersGuessed = [];
        
        
//list of words to guess
        var words = [
            ["e", "c", "l", "i", "p", "s", "e"],
            ["m", "o", "o", "n"],
            ["s", "o", "l", "a", "r"],
            ["s", "u", "n"]
        ];

//chose word to be guessed
        var selectedWord = words[Math.floor((Math.random() * (words.length - 1)))];
       console.log(selectedWord);

// symbolizes and displays every letter in selectedWord as _ _ _ _ _
    
        // for (i = 0; i < selectedWord.length; i++) {
        //     selectedWord[i] = "_ ";
        //     console.log(selectedWord);
        //     var displayedWord = document.getElementById("word");
        //     var wordNode = document.createTextNode(selectedWord[i]);
        //     displayedWord.appendChild(wordNode);
        // }

// make an object equating key codes to letters accepted

        //         var alpha = {
//             65: "a",
//             66: "b",
//             67: "c",
//             68: "d",
//             69: "e",
//             70: "f",
//             71: "g",
//             72: "h",
//             73: "i",
//             74: "j",
//             75: "k",
//             76: "l",
//             77: "m",
//             78: "n",
//             79: "o",
//             80: "p",
//             81: "q",
//             82: "r",
//             83: "s",
//             84: "t",
//             85: "u",
//             86: "v",
//             87: "w",
//             88: "x",
//             89: "y",
//             90: "z",
//         };


//takes an input from the user and stores it in an array, will not repeat the same choice more than once
        document.onkeyup = function (event) {
            var userInput = event.key;
            
            if ((lettersGuessed.indexOf(userInput) < 0)) {
            
            
                // console.log(typeof userInput);
            
                lettersGuessed.push(userInput);
            
                var lettersChosenNode = document.createTextNode(" " + lettersGuessed[lettersGuessed.length - 1]);
                document.getElementById("letters").appendChild(lettersChosenNode);
            
            }
        
            console.log(lettersGuessed + " outside of if still in keyup function");
            
            if (lettersGuessed[lettersGuessed.length -1] in selectedWord){
                console.log("yay you're making progress");
            }
        };
 
//check to see if the letter guessed is in the selected word and display the letter if it is, remove a guess if it is not

       
       
      




//
    // };
