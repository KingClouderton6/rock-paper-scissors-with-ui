const rockButton = document.querySelector('#Rock');
const paperButton = document.querySelector('#Paper');
const scissorsButton = document.querySelector('#Scissors');
const choice = ['Rock', 'Paper', 'Scissors'];


const computerChoice = () => choice[Math.floor(Math.random() * choice.length)];  
const computerSelection = computerChoice();

