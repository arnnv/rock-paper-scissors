let victories = 0;
let defeats = 0;
let ties = 0;

let totalGames = 0;

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3); // Generate a random number between 0 and 2

  let arr = ["rock", "paper", "scissors"];
  let compChoice = arr[random];

  return compChoice;
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const playerSelection = e.currentTarget.id;
    const computerSelection = getComputerChoice();

    game(playerSelection, computerSelection);
  });
});

function gameOver() {
  let gameOver = document.querySelector("#gameOver");

  if (!gameOver) {
    gameOver = document.createElement("div");
    gameOver.setAttribute("id", "gameOver");

    const footer = document.querySelector(".footer");
    footer.parentNode.insertBefore(gameOver, footer);
  }

  const msg = "GAME OVER!";
  gameOver.textContent = msg;
}

function game(playerSelection, computerSelection) {
  totalGames++;
  if (totalGames > 5) {
    return gameOver();
  }

  if (playerSelection === computerSelection) {
    tie();
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    victory();
  } else {
    defeat();
  }
}

function victory() {
  victories++;
  let wins = document.querySelector("#wins");

  if (!wins) {
    wins = document.createElement("div");
    wins.setAttribute("id", "wins");

    const resDiv = document.querySelector(".result");
    resDiv.appendChild(wins);
  }
  wins.textContent = `Wins: ${victories}`;
}

function defeat() {
  defeats++;
  let losses = document.querySelector("#losses");

  if (!losses) {
    losses = document.createElement("div");
    losses.setAttribute("id", "losses");

    const resDiv = document.querySelector(".result");
    resDiv.appendChild(losses);
  }
  losses.textContent = `Losses: ${defeats}`;
}

function tie() {
  ties++;
  let tieDiv = document.querySelector("#ties");

  if (!tieDiv) {
    tieDiv = document.createElement("div");
    tieDiv.setAttribute("id", "ties");

    const resDiv = document.querySelector(".result");
    resDiv.appendChild(tieDiv);
  }
  tieDiv.textContent = `Ties: ${ties}`;
}
