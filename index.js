let victories = 0;
let defeats = 0;
let ties = 0;

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3); // Generate a random number between 0 and 2

  let arr = ["rock", "paper", "scissors"];
  let compChoice = arr[random];

  return compChoice;
}

const buttons = document.querySelectorAll(".move");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const playerSelection = e.currentTarget.id;
    const computerSelection = getComputerChoice();

    game(playerSelection, computerSelection);
  });
});

function reset() {
  victories = 0;
  defeats = 0;
  ties = 0;

  const lossDiv = document.querySelector("#losses");
  const winDiv = document.querySelector("#wins");
  const tieDiv = document.querySelector("#ties");
  const gameOverDiv = document.querySelector("#gameOver");

  if (lossDiv) {
    lossDiv.parentNode.removeChild(lossDiv);
  }
  if (winDiv) {
    winDiv.parentNode.removeChild(winDiv);
  }
  if (tieDiv) {
    tieDiv.parentNode.removeChild(tieDiv);
  }
  if (gameOverDiv) {
    gameOverDiv.parentNode.removeChild(gameOverDiv);
  }
}

function gameOver() {
  let gameOver = document.querySelector("#gameOver");

  if (!gameOver) {
    gameOver = document.createElement("div");
    gameOver.setAttribute("id", "gameOver");

    const footer = document.querySelector(".footer");
    footer.parentNode.insertBefore(gameOver, footer);

    const gameEndDiv = document.createElement("div");
    gameEndDiv.setAttribute("id", "gameEndDiv");
    gameEndDiv.textContent = "GAME OVER";

    const startOver = document.createElement("button");
    startOver.setAttribute("id", "startOver");
    startOver.textContent = "Reset?";

    gameOver.appendChild(gameEndDiv);
    gameOver.appendChild(startOver);
  }

  const resetButton = document.querySelector("#startOver");
  resetButton.addEventListener("click", reset);
}

function game(playerSelection, computerSelection) {
  if (victories === 5 || defeats === 5) {
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
    resDiv.insertAdjacentElement("afterbegin", wins);
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
    resDiv.insertAdjacentElement("beforeend", losses);
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
    resDiv.insertAdjacentElement("beforeend", tieDiv);
  }
  tieDiv.textContent = `Ties: ${ties}`;
}
