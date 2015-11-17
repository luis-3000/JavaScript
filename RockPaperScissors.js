/* Game of rock, paper, scissors */

// 1.) USER MAKES A CHOICE

//Get correct user choice
var userChoice;
do {
    userChoice = prompt("Do you choose rock, paper or scissors?");
} while(userChoice != "rock" | userChoice != "paper" | userChoice != "scissors");

// 2). COMPUTER MAKES A CHOICE
var userChoice = prompt("Do you choose rock, paper or scissors?");

var computerChoice = Math.random();

if (computerChoice >=0 && computerChoice <= 0.33) {
    computerChoice = "rock";
} else if (computerChoice >= 0.34 && computerChoice <= 0.66) {
    computerChoice = "paper";
} else { //if (computerChoice >= 0.67 && computerChoice <= 1) 
    computerChoice = "scissors";
}

console.log("Computer: " + computerChoice);

// 3). COMPARE CHOICES AND SELECT A WINNER

var compare = function(choice1, choice2) {
    if(choice1 === choice2) {
        return "The result is a tie!";
    } else if (choice1 == "rock") { // If user choose rock
        if (choice2 === "scissors") {
            return "rock wins";
        } else { //choice2 === paper
            return "paper wins";
        }
    } else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "paper wins";
        } else if (choice2 === "scissors") {
            return "scissors wins";
        }            
    } else { // choice1 === scissors
        if (choice2 === "rock") {
            return "rock wins";
        } else if (choice2 === "paper") {
            return "scissors wins";
        }        
    }
}

compare(userChoice, computerChoice);