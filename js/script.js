function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let choice;
    if (randomNumber == 1) {
        choice = 'Rock';
    } else if (randomNumber == 2) {
        choice = 'Paper';
    } else {
        choice = 'Scissors'
    }
    return choice;
}

console.log(getComputerChoice());