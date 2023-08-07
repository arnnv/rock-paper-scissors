function getComputerChoice() {
    let random = Math.floor(Math.random() * 3); // Generate a random number between 0 and 2
    
    let arr = ["Rock", "Paper", "Scissors"];
    let compChoice = arr[random];

    return compChoice;
  }
  

function game() {
    let wins = 0;
    let loss = 0;
    let ties = 0;
    
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("What is your Selection?\nRock, Paper, Scissors?");
        playerChoice = playerChoice.slice(0, 1).toUpperCase() + playerChoice.slice(1).toLowerCase();
        let computerChoice = getComputerChoice();
        result = play(playerChoice, computerChoice);
        if (result === 1) wins++;
        if (result === -1) loss++;
        if (result === 0) ties++;
    }

    let hasWon = "This game was a tie :)";

    if (wins > loss) hasWon = "You have won the game!";
    if (loss > wins) hasWon = "You have lost the game!";

    console.log("\n");
    console.log(`
    Final Result

    Victories: ${wins}
    Defeats: ${loss}
    Ties: ${ties}

    ${hasWon}
    `)
}

function defeat(playerSelection, computerSelection) {
    console.log(`You lost! ${computerSelection} beats ${playerSelection}.`)
    return -1;
}

function victory(playerSelection, computerSelection) {
    console.log(`You win! ${playerSelection} beats ${computerSelection}.`)
    return 1;
}

function tie(playerSelection) {
    console.log(`This was a tie! You both selected ${playerSelection}.`)
    return 0;
}

function play(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return tie(playerSelection);
    }

    if (playerSelection === "Rock" && computerSelection === "Scissors"
    || playerSelection === "Paper" && computerSelection === "Rock"
    || playerSelection === "Scissors" && computerSelection === "Paper") {
        return victory(playerSelection, computerSelection);
    }

    return defeat(playerSelection, computerSelection);
}