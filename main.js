function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    switch (choice) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
    }
}



const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return ("You win! Rock beats scissors.");
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return ("You win! Paper beats rock.");
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return ("You win! Scissors beats paper.");
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        return ("You lose! Paper beats rock.");
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        return ("You lose! Scissors beats paper.");
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        return ("You lose! Rock beats scissors.");
    }
    else {
        return ("It's a tie!");
    }
}

function game() {
    let playerSelection = prompt("Please enter your selection").toLowerCase();
    for (let i = 1; i < 5; i++)
        return playRound(playerSelection, computerSelection)
    }