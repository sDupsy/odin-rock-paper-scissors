const results = document.querySelector("#results");
const score = document.querySelector("#score");
const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorButton = document.querySelector("#scissorButton");


let computerScore = 0;
let humanScore = 0;
let gameOver = false;


function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}


function playRound(humanChoice, computerChoice) {
  if (gameOver) return;

  const winMsg = `You win! ${humanChoice} beats ${computerChoice}.`;
  const loseMsg = `You lose! ${computerChoice} beats ${humanChoice}.`;
  const drawMsg = `It's a draw! You both chose ${humanChoice}.`;

  if (humanChoice === computerChoice) {
    results.textContent = drawMsg;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissor") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissor" && computerChoice === "paper")
  ) {
    humanScore++;
    results.textContent = winMsg;
  } else {
    computerScore++;
    results.textContent = loseMsg;
  }

  updateScore();
  checkGameOver();
}


function updateScore() {
  score.textContent = `Computer Score: ${computerScore}  Human Score: ${humanScore}`;
}


function checkGameOver() {
  if (computerScore >= 5) {
    results.textContent = "Game over! You lose the game.";
    gameOver = true;
  } else if (humanScore >= 5) {
    results.textContent = "Congratulations! You win the game.";
    gameOver = true;
  }
}


rockButton.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

paperButton.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

scissorButton.addEventListener("click", () => {
  playRound("scissor", getComputerChoice());
});
