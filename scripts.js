const rockButton = document.querySelector('#Rock');
const paperButton = document.querySelector('#Paper');
const scissorsButton = document.querySelector('#Scissors');
const container = document.querySelector('.ui-container');


let computerSelection;
const choice = ['Rock', 'Paper', 'Scissors'];
function computerDecision (){
    computerSelection = choice[Math.floor(Math.random() * choice.length)];
    return computerSelection;
}

// Buttons that set playerSelection variable and call playRound() function
// Future me should tidy this up
let playerSelection;
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


// Grabs playerSelection from button and runs it against corresponding rps logic
function playRound(playerSelection, computerSelection) {
    computerDecision();

   if (playerSelection === "rock") {
       if (computerSelection === "Rock") {
        console.log("You draw. Go again!");
       } else if (computerSelection === "Scissors") {
        console.log("You lose!");
        computerWin();
       } else {
           console.log("You win!");
           playerWin();
       } 
   } 

   if (playerSelection === "scissors") {
        if (computerSelection === "Rock") {
            console.log("You lose!");
            computerWin();
        } else if (computerSelection === "Paper") {
            console.log("You win!");
            playerWin();
        } else {
            console.log("You draw. Go again!");
        }
   }

   if (playerSelection === "paper") {
        if (computerSelection === "Rock") {
            console.log("You win!");
            playerWin();
        } else if (computerSelection === "Paper") {
            console.log("You draw. Go again!");
        } else {
            console.log("You lose.");
            computerWin();
        }
   }

}

// Two functions to increase playerScore and computerScore respectively and update it on screen
let playerScore = 0;
let computerScore = 0;

const roundResult = document.querySelector(".round-result");
roundResult.classList.add('title');
roundResult.textContent = "Let the match begin!";


const playerPoints = document.querySelector(".player-score");
playerPoints.textContent = playerScore;

const computerPoints = document.querySelector(".computer-score");
computerPoints.textContent = computerScore;

function playerWin(){
    ++playerScore;
    scoreUpdate();
    console.log(`Player points: ${playerScore} Computer points: ${computerScore}`);
    return playerScore;

}

function computerWin(){
    ++computerScore;
    scoreUpdate();
    console.log(`Player points: ${playerScore} Computer points: ${computerScore}`);
    return computerScore;
}

function scoreUpdate(){
    playerPoints.textContent = playerScore;
    computerPoints.textContent = computerScore;
    return;
}
