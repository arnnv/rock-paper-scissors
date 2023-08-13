function getComputerChoice() {
  let random = Math.floor(Math.random() * 3); // Generate a random number between 0 and 2

  let arr = ["rock", "paper", "scissors"];
  let compChoice = arr[random];

  return compChoice;
}

function defeat(playerSelection, computerSelection) {
  console.log(`You lost! ${computerSelection} beats ${playerSelection}.`);
  return -1;
}

function victory() {
  let wins = document.querySelector("#wins");

  if (!wins) {
    wins = document.createElement("div");
    wins.setAttribute("id", "wins");
    wins.textContent = "Wins: 1";

    const resDiv = document.querySelector(".result");
    resDiv.appendChild(wins);
  } else {
    const victories = parseInt(wins.textContent.slice(6));
    wins.textContent = `Wins: ${victories + 1}`;
  }
}

function tie(playerSelection) {
  console.log(`This was a tie! You both selected ${playerSelection}.`);
  return 0;
}

function gameOver() {}

function play(playerSelection, computerSelection, totalGames) {
  if (totalGames >= 5) gameOver();
  if (playerSelection === computerSelection) {
    return tie(playerSelection);
  }

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return victory(playerSelection, computerSelection);
  }

  return defeat(playerSelection, computerSelection);
}

function game() {
  let loss = 0;
  let ties = 0;

  let totalGames = 0;

  let hasWon = "This game was a tie :)";

  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const playerSelection = e.currentTarget.id;
      const computerSelection = getComputerChoice();

      totalGames++;
      play(playerSelection, computerSelection, totalGames);
    });
  });

  // console.log("\n");
  // console.log(`
  //   Final Result

  //   Victories: ${wins}
  //   Defeats: ${loss}
  //   Ties: ${ties}

  //   ${hasWon}
  //   `);
}

game();
