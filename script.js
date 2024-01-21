function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
let choice = options[Math.floor(Math.random()*options.length)];
return choice;
}

function getPlayerSelection() {
    let playerChoice = prompt("Choose Rock, Paper, or Scissors").toLowerCase();
    switch (playerChoice) {
        case "rock":
        case "paper":
        case "scissors":
        return playerChoice;
    default:
        return alert("Please refresh and choose again.");
    }
}

function playRound(playerSelection, computerSelection) {
    let compare = playerSelection + computerSelection
    switch (compare) {
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
    return console.log(computerSelection + " beats " + playerSelection + ", you lose!")
    break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
    return console.log("Tie, try to loop here")
    break;
    default:
        return console.log(playerSelection + " beats " + computerSelection + ", you win!")
    }
}

let playerSelection = getPlayerSelection();
let computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));

/*
Notes

Rock paper scissors rules
Rock > Scissors
Scissors > Paper
Paper > Rock

To do:
Remove console.logs on playround later on
Learn loop for tie results and wrong player input

fx game: Use playround inside of this function, keeps score and reports winner

*/