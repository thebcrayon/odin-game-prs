function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    return selectionArray[randomNumber];
}

function getHumanChoice() {
    let userChoice = prompt("Enter Choice \nType: 'Paper', 'Rock', or 'Scissors' \nOr hit 'Cancel' to exit. ");
    let arrayToLowerCase = selectionArray.map(item => item.toLowerCase());
    if (userChoice != undefined) {
        if (arrayToLowerCase.includes(userChoice.toLowerCase())) {
            return userChoice;
        } else if (userChoice == '') {
            alert('Field left blank.');
            return getHumanChoice();
        } else {
            alert('Word not recognized. Check spelling and try again.');
            return getHumanChoice();
        }
    }
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    let winMsg = "You win: ";
    let loseMsg = "You lose: ";
    switch (humanChoice) {
        case 'rock':
            if (computerChoice == 'paper') {
                alert(loseMsg + `${computerChoice} beats ${humanChoice}`);
                computerScore++;
            } else if (computerChoice == 'scissors') {
                alert(winMsg + `${humanChoice} beats ${computerChoice}`);
                humanScore++;
            } else {
                alert(`It's a tie! You selected ${humanChoice} and the computer selected ${computerChoice}`);
            }
            break;

        case 'paper':
            if (computerChoice == 'scissors') {
                alert(loseMsg + `${computerChoice} beats ${humanChoice}`);
                computerScore++;
            } else if (computerChoice == 'rock') {
                alert(winMsg + `${humanChoice} beats ${computerChoice}`);
                humanScore++;
            } else {
                alert(`It's a tie! You selected ${humanChoice} and the computer selected ${computerChoice}`);
            }
            break;

        case 'scissors':
            if (computerChoice == 'rock') {
                alert(loseMsg + `${computerChoice} beats ${humanChoice}`);
                computerScore++;
            } else if (computerChoice == 'paper') {
                alert(winMsg + `${humanChoice} beats ${computerChoice}`);
                humanScore++;
            } else {
                alert(`It's a tie! You selected ${humanChoice} and the computer selected ${computerChoice}`);
            }
            break;
    }
}

const selectionArray = ['Rock', 'Paper', 'Scissors'];
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
let humanScore = 0;
let computerScore = 0;
playRound(humanChoice, computerChoice);


