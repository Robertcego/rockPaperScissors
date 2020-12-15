function computerPlay() {
    let computerChoice = ["Rock", "Paper", "Scissors"];
    return (random =
      computerChoice[Math.floor(Math.random() * computerChoice.length)]);
  }
  computerPlay();
  console.log(random);

  function game() {
    function playRound(playerSelection, computerSelection) {
      return "You Lose! Paper beats Rock".toUpperCase();
    }

    const playerSelection = prompt("Type your choice:");
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }

 