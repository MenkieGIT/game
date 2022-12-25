function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    switch (choice) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper"
            break;
        case 2:
            return "scissors"
            break;
        default:
        break;
    }
}

let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return ("You win! Rock beats scissors.");
        playerScore++;
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return ("You win! Paper beats rock.");
        playerScore++;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return ("You win! Scissors beats paper.");
        playerScore++;
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        return ("You lose! Paper beats rock.");
        computerScore++;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        return ("You lose! Scissors beats paper.");
        computerScore++;
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        return ("You lose! Rock beats scissors.");
        computerScore++;
    }
    else {
        return ("It's a tie!");
        computerScore++;
        playerScore++;
    }
}

function game() {
    for (let i = 1; i <= 5; i++) {
        let playerSelection = prompt("Please enter your selection").toLowerCase();
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }

    return (`The score is ${playerScore} : ${computerScore}`)
    
    if (computerScore > playerScore) {
        return ("You lose! The computer won!")
    }
    else if (playerScore > computerScore) {
        return ("You win! The computer has got nothing on you!")
    }
    else {
        return ("It's a tie!")
    }

    playerScore = 0;
    computerScore = 0;
    
}