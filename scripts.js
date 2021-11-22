const rockButton = document.querySelector('#Rock');
const paperButton = document.querySelector('#Paper');
const scissorsButton = document.querySelector('#Scissors');

let playerSelection;
let computerSelection;

const choice = ['Rock', 'Paper', 'Scissors'];

function computerDecision (){
    computerSelection = choice[Math.floor(Math.random() * choice.length)];
    return computerSelection;
}


rockButton.addEventListener('click', () => {
    playerSelection = "rock";
    playRound(playerSelection, computerSelection)
    return playerSelection;
});

paperButton.addEventListener('click', () => {
    playerSelection = "paper";
    playRound(playerSelection, computerSelection)
    return playerSelection;
});

scissorsButton.addEventListener('click', () => {
    playerSelection = "scissors";
    playRound(playerSelection, computerSelection)
    return playerSelection;
});


function playRound(playerSelection, computerSelection) {
    computerDecision();

   if (playerSelection === "rock") {
       if (computerSelection === "Rock") {
        console.log("You draw!");
       } else if (computerSelection === "Scissors") {
        console.log("You lose!");
       } else {
           console.log("You win!");
       } 
   } 

   if (playerSelection === "scissors") {
    if (computerSelection === "Rock") {
        console.log("You lose!");
    } else if (computerSelection === "Paper") {
        console.log("You win!");
    } else {
        console.log("You draw.");
    }
   }

   if (playerSelection === "paper") {
    if (computerSelection === "Rock") {
        console.log("You win!");
    } else if (computerSelection === "Paper") {
        console.log("You draw!");
    } else {
        console.log("You lose.");
    }
   }

}