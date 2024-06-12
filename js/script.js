const container = document.querySelector('.container');
const optionList = document.querySelector('#options');
const listOfChoices = document.querySelectorAll('#options>li');
const msgBox = document.querySelector('.msg');
const scoreP = document.querySelector('.score');

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

function showRoundWinner(humanScore, computerScore, message) {
    scoreP.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
    if (humanScore == 5 || computerScore == 5) {
        scoreP.textContent = '';
        if (humanScore > computerScore) {
            message += `Final Score : ${humanScore} to ${computerScore}, you win!`;
        } else {
            message += `Final Score : ${humanScore} to ${computerScore}, you lose!`;
        }
        resetGame();
    }

    msgBox.textContent = message;
}

function resetGame() {
    const playButton = document.createElement('button');
    playButton.textContent = 'Play Again?';
    playButton.addEventListener('click', () => {
        //reset stuff
        humanScore = 0;
        computerScore = 0;
        container.removeChild(playButton);
        msgBox.textContent = '';
    });

    container.appendChild(playButton);
}

function playRound(humanSelection, computerSelection) {
    let msg = '';
    let humanChoice = humanSelection;
    let computerChoice = computerSelection;

    // let lastRound = ;
    const tieCondition = (humanChoice === computerChoice);
    const humanWinCondition = (
        (humanChoice === PAPER && computerChoice === ROCK) ||
        (humanChoice === ROCK && computerChoice === SCISSORS) ||
        (humanChoice === SCISSORS && computerChoice === PAPER)
    );

    if (tieCondition) {
        msg = `It's a tie, you both selected ${humanChoice}. `;
    } else if (humanWinCondition) {
        msg = `You win! ${humanChoice} beats ${computerChoice}. `;
        humanScore++;
    } else {
        msg = `You lose! ${humanChoice} loses to ${computerChoice}. `;
        computerScore++;
    }

    showRoundWinner(humanScore, computerScore, msg);
}