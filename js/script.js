const container = document.querySelector('.container');
const optionList = document.querySelector('#options');
const listOfChoices = document.querySelectorAll('#options>li');

//Storing text values for comparison, no need to check spelling errors.
const PAPER = listOfChoices.item(0).textContent;
const ROCK = listOfChoices.item(1).textContent;
const SCISSORS = listOfChoices.item(2).textContent;

const selectionArray = [PAPER, ROCK, SCISSORS]

let humanScore = 0;
let computerScore = 0;

optionList.addEventListener('click', (event) => {
    getHumanChoice(event.target.textContent);
});

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    return selectionArray[randomNumber];
}

function getHumanChoice(textContent) {
    let humanChoice = textContent;
    playRound(humanChoice, getComputerChoice());
}

function showWinner(message) {
    let msgBox = document.querySelector('.msg');
    msgBox.textContent = message;
}

function getFinalScore(humanScore, computerScore) {
    let msg = '';
    if (humanScore > computerScore) {
        msg = `Congrats! You beat the computer ${humanScore} to ${computerScore}`;
    } else {
        msg = `Aw shoot! You lost to the computer ${humanScore} to ${computerScore}`;
    }

    showWinner(msg);
}

function playRound(humanSelection, computerSelection) {
    let msg = '';
    let humanChoice = humanSelection;
    let computerChoice = computerSelection;
    const tieCondition = (humanChoice === computerChoice);
    const humanWinCondition = (
        (humanChoice === PAPER && computerChoice === ROCK) ||
        (humanChoice === ROCK && computerChoice === SCISSORS) ||
        (humanChoice === SCISSORS && computerChoice === PAPER)
    );

    if (tieCondition) {
        msg = `It's a tie, you both selected ${humanChoice}`;
    } else if (humanWinCondition) {
        msg = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else {
        msg = `You lose! ${humanChoice} loses to ${computerChoice}`;
        computerScore++;
    }

    if (humanScore == 5 || computerScore == 5) {
        getFinalScore(humanScore, computerScore);
    } else {
        showWinner(msg);
    }
}