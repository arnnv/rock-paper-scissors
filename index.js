function getComputerChoice() {
    let random = Math.floor(Math.random() * 3); // Generate a random number between 0 and 2
    
    let arr = ["Rock", "Paper", "Scissors"];
    let compChoice = arr[random];

    return compChoice;
  }
  

function execute() {
    let playerChoice = prompt("What is your Selection?\nRock, Paper, Scissors?");
    playerChoice = playerChoice.slice(0, 1).toUpperCase() + playerChoice.slice(1).toLowerCase();
    let computerChoice = getComputerChoice();

    play(playerChoice, computerChoice);
}

function defeat(playerSelection, computerSelection) {
    console.log(`You lost! ${computerSelection} beats ${playerSelection}.`)
}

function victory(playerSelection, computerSelection) {
    console.log(`You win! ${playerSelection} beats ${computerSelection}.`)
}

function tie(playerSelection) {
    console.log(`This was a tie! You both selected ${playerSelection}.`)
}

function play(playerSelection, computerSelection) {
    if (playerSelection == "Rock") {
        if (computerSelection == "Paper") {
            defeat(playerSelection, computerSelection);
            return;
        }
        if (computerSelection == "Scissors") {
            victory(playerSelection, computerSelection);
            return;
        }

        tie(playerSelection);
    }

    if (playerSelection == "Paper") {
        if (computerSelection == "Rock") {
            victory(playerSelection, computerSelection);
            return;
        }
        if (computerSelection == "Scissors") {
            defeat(playerSelection, computerSelection);
            return;
        }

        tie(playerSelection);
    }

    if (playerSelection == "Scissors") {
        if (computerSelection == "Rock") {
            defeat(playerSelection, computerSelection);
            return;
        }
        if (computerSelection == "Paper") {
            victory(playerSelection, computerSelection);
            return;
        }

        tie(playerSelection);
    }
}