function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
let choice = options[Math.floor(Math.random()*options.length)];
return choice;
}

function playRound(playerSelection, computerSelection) {

}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection));