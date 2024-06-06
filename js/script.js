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
                return false;
            } else if (computerChoice == 'scissors') {
                alert(winMsg + `${humanChoice} beats ${computerChoice}`);
                return true //humanScore++;
            } else {
                alert(`It's a tie! You selected ${humanChoice} and the computer selected ${computerChoice}`);
                return undefined;
            }
            break;

        case 'paper':
            if (computerChoice == 'scissors') {
                alert(loseMsg + `${computerChoice} beats ${humanChoice}`);
                return false; 
            } else if (computerChoice == 'rock') {
                alert(winMsg + `${humanChoice} beats ${computerChoice}`);
                return true;
            } else {
                alert(`It's a tie! You selected ${humanChoice} and the computer selected ${computerChoice}`);
                return undefined;
            }
            break;

        case 'scissors':
            if (computerChoice == 'rock') {
                alert(loseMsg + `${computerChoice} beats ${humanChoice}`);
                return false;
            } else if (computerChoice == 'paper') {
                alert(winMsg + `${humanChoice} beats ${computerChoice}`);
                return true;
            } else {
                alert(`It's a tie! You selected ${humanChoice} and the computer selected ${computerChoice}`);
                return undefined;
            }
            break;
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let isTie = 0;
    for (i = 1; i <= 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let getWinner = playRound(humanChoice, computerChoice);
        if (getWinner != undefined) {
            (getWinner) ? humanScore++ : computerScore++;
        } else {
            isTie++;
        }
    }
    console.log(`Final Score: YOU : ${humanScore} | COMPUTER : ${computerScore} | TIES : ${isTie}`);
}

const selectionArray = ['Rock', 'Paper', 'Scissors'];
playGame();