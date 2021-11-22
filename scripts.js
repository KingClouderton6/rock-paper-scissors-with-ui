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
    playerSelection = "Rock";
    computerDecision();
    playRound(playerSelection, computerSelection);
    return playerSelection;
});

paperButton.addEventListener('click', () => {
    playerSelection = "Paper";
    computerDecision();
    playRound(playerSelection, computerSelection);
    return playerSelection;
});

scissorsButton.addEventListener('click', () => {
    playerSelection = "Scissors";
    computerDecision();
    playRound(playerSelection, computerSelection);
    return playerSelection;
});


// Grabs playerSelection from button and runs it against corresponding rps logic
function playRound(playerSelection, computerSelection) {
    

    if (playerSelection === "Rock" && computerSelection === "Rock"){
        draw();
    } else if (playerSelection === "Rock" && computerSelection === "Paper"){
        computerWin();
    } else if (playerSelection === "Rock" && computerSelection === "Scissors"){
        playerWin();
    } else if (playerSelection === "Paper" && computerSelection === "Rock"){
        playerWin();
    } else if (playerSelection === "Paper" && computerSelection === "Scissors"){
        computerWin();
    } else if (playerSelection === "Paper" && computerSelection === "Paper"){
        draw();
    } else if (playerSelection === "Scissors" && computerSelection === "Rock"){
        computerWin();
        roundResult.textContent = "You lose!";
    } else if (playerSelection === "Scissors" && computerSelection === "Scissors"){
        draw();
    } else if (playerSelection === "Scissors" && computerSelection === "Paper"){
        playerWin();
    }
}


let playerScore = 0;
let computerScore = 0;

const roundResult = document.querySelector(".round-result");
roundResult.classList.add('title');
roundResult.textContent = "Let the match begin!";


const playerPoints = document.querySelector(".player-score");
playerPoints.classList.add('score');
playerPoints.textContent = `${playerScore}     -      ${computerScore}`;


// Two functions to increase playerScore and computerScore respectively; also says whether you win or lose in text.
function playerWin(){
    ++playerScore;
    roundResult.textContent = `You win!` ;
    scoreUpdate();
    return playerScore;
}

function computerWin(){
    ++computerScore;
    roundResult.textContent = `You lose!` ;
    scoreUpdate();
    return computerScore;
}

function draw(){
    roundResult.textContent = `It's a draw!`;
    scoreUpdate();
}

const playerAction = document.querySelector(".player-decision");
const computerAction = document.querySelector(".computer-decision");

function scoreUpdate(){
    showRoll();
    playerPoints.textContent = `${playerScore}  -  ${computerScore}`;
    return;
}

function showRoll(){
    const playerRoll = document.createElement('p');
    playerRoll.textContent = `${playerSelection}`;
    playerAction.appendChild(playerRoll);

    const computerRoll = document.createElement('p');
    computerRoll.textContent = `${computerSelection}`;
    computerAction.appendChild(computerRoll);
    
    gameOver();
}

function gameOver(){
    if (playerScore === 5) {
        roundResult.textContent = `Victory, you have won!`;
        removeFunctionality();
    } else if(computerScore === 5) {
        roundResult.textContent = `Defeat, the computer wins!`;
        removeFunctionality();
    }
}

function removeFunctionality(){
    document.getElementById("Rock").disabled = true;
    document.getElementById("Paper").disabled = true;
     document.getElementById("Scissors").disabled = true;
}

const restartButton = document.querySelector('#restart-game');
restartButton.addEventListener('click', () => { 
    document.getElementById("Rock").disabled = false;
    document.getElementById("Paper").disabled = false;
     document.getElementById("Scissors").disabled = false;
    roundResult.textContent = "Let the match begin!";
    resetScore();
});

function resetScore(){
    playerScore = 0; 
    computerScore = 0;
    playerPoints.textContent = `${playerScore}  -  ${computerScore}`;
    return;
}