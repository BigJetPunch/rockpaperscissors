function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
let choice = options[Math.floor(Math.random()*options.length)];
return choice;
}

function getPlayerSelection() {
    let playerChoice = prompt("Choose Rock, Paper, or Scissors").toLowerCase();
    if (playerChoice == "rock"){
return playerChoice;
}   else if (playerChoice == "paper"){
return playerChoice;
}   else if (playerChoice == "scissors"){
return playerChoice;
}   else {
return alert("Please refresh and select again.");
}    
}

function playRound(playerSelection, computerSelection) {
// Code for comparing computer and player selection goes here
}

let playerSelection = getPlayerSelection();
const computerSelection = getComputerChoice();







//Current issue** 
//error with .toLowerCase at the end of selection, figure out why later





/*
notes
For playRound function 
Get Computerselection - lowercase
Get Playerselection - lowercase
(if)
Compare for all player loses, use %% and ||
: ex computer rock && player scissors || computer... ect
(else if)
Compare for player wins
(else)
draw

Return should have (winner var) beats (loser var), (you win or you lose)
*/