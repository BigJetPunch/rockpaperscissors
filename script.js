function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
let choice = options[Math.floor(Math.random()*options.length)];
return choice;
}

function playRound(playerSelection, computerSelection) {

}
/*Play a round
Computer input > lowercase
Player input > lowercase

if same = tie
Do I group them in lose and win? Hmm.
*/
const playerSelection = "rock";
//Change later to accept prompt input
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection,computerSelection));
//use this to test, make sure you're getting player selection and
//computer selection