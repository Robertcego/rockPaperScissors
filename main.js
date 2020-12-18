let userScore = 0;
let compScore = 0;
const computerScore = document.getElementById("computerScore");
const playerScore = document.getElementById("playerScore");
const displayScore = document.querySelector(".displayScore");
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  let compChoices = Math.floor(Math.random() * choices.length);
  return choices[compChoices]; // This returns the random number that match the array position.
}
getComputerChoice();

function toString(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function win(userChoice, computerChoice) {
  userScore++;
  playerScore.innerHTML = userScore;
  displayScore.innerHTML = `${toString(userChoice)} beats ${toString(computerChoice)} || You win`;
}
function lose(userChoice, computerChoice) {
  compScore++;
  computerScore.innerHTML = compScore;
  displayScore.innerHTML = `${toString(userChoice)} lose to ${toString(computerChoice)} || You lost`;
}
function draw(userChoice, computerChoice) {
  displayScore.innerHTML = `${toString(userChoice)} equals ${toString(computerChoice)}  || It´s a draw`;
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rockButton.addEventListener("click", function () {
    game("r");
  });
  paperButton.addEventListener("click", function () {
    game("p");
  });
  scissorsButton.addEventListener("click", function () {
    game("s");
  });
}
main();
