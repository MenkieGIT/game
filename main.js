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





function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You win! Rock beats scissors.");
        playerScore++;
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You win! Paper beats rock.");
        playerScore++;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You win! Scissors beats paper.");
        playerScore++;
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("You lose! Paper beats rock.");
        computerScore++;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("You lose! Scissors beats paper.");
        computerScore++;
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("You lose! Rock beats scissors.");
        computerScore++;
    }
    else {
        console.log("It's a tie!");
        computerScore++;
        playerScore++;
    }
}

let computerScore = 0;
let playerScore = 0;

function game() {
    for (let i = 1; i <= 5; i++) {
        let playerSelection = prompt("Please enter your selection").toLowerCase();
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }

    console.log(`The score is ${playerScore} : ${computerScore}`)
    if (computerScore > playerScore) {
        console.log("You lose! The computer won!")
    }
    else if (playerScore > computerScore) {
        console.log("You win! The computer has got nothing on you!")
    }
    else {
        console.log("It's a tie!")
    }
    
}