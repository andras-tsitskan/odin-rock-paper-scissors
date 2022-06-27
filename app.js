"use strict";

function getComputerSelection() {
  let computerSelection;
  let randomNumber = Math.ceil(Math.random() * 3);
  switch (randomNumber) {
    case 1:
      computerSelection = "rock";
      break;
    case 2:
      computerSelection = "paper";
      break;
    case 3:
      computerSelection = "scissors";
      break;
    default:
      break;
  }
  return computerSelection;
}

const playerChoiceButtons = document.querySelectorAll(".js-btn");
const playerChoiceSpan = document.querySelector("#js-player-choice");
const computerChoiceSpan = document.querySelector("#js-computer-choice");
const roundResultSpan = document.querySelector("#js-round-result");
const playerScoreSpan = document.querySelector("#js-player-score");
const computerScoreSpan = document.querySelector("#js-computer-score");

for (const button of playerChoiceButtons) {
  button.addEventListener("click", playRound);
}

function getPlayerSelection(event) {
  // console.log(event.target.textContent.toLowerCase());
  return event.target.textContent.toLowerCase();
}

let playerScore = 0;
let computerScore = 0;

function playRound() {
  let playerSelection = getPlayerSelection(event);
  playerChoiceSpan.textContent = playerSelection;

  let computerSelection = getComputerSelection();
  computerChoiceSpan.textContent = computerSelection;

  const round = {
    result: "",
    message: "",
  };

  switch (true) {
    case playerSelection === computerSelection:
      round.result = "tie";
      round.message = "It is a tie!";

      break;
    case playerSelection === "rock" && computerSelection === "paper":
      round.result = "loss";
      round.message = "You lose. :( Paper beats rock.";
      computerScore++;
      break;
    case playerSelection === "rock" && computerSelection === "scissors":
      round.result = "victory";
      round.message = "You win! :) Rock beats scissors.";
      playerScore++;
      break;
    case playerSelection === "paper" && computerSelection === "rock":
      round.result = "victory";
      round.message = "You win! :) Paper beats rock.";
      playerScore++;
      break;
    case playerSelection === "paper" && computerSelection === "scissors":
      round.result = "loss";
      round.message = "You lose. :( Scissors beat paper.";
      computerScore++;
      break;
    case playerSelection === "scissors" && computerSelection === "rock":
      round.result = "loss";
      round.message = "You lose. :( Rock beats scissors.";
      computerScore++;
      break;
    case playerSelection === "scissors" && computerSelection === "paper":
      round.result = "victory";
      round.message = "You win! :) Scissors beat paper.";
      playerScore++;
      break;
  }

  roundResultSpan.textContent = round.message;
  playerScoreSpan.textContent = playerScore;
  computerScoreSpan.textContent = computerScore;
  return round;
}

function game() {
  while (playerScore < 5 || computerScore < 5) {
    playRound();

    let roundResult = playRound().result;

    switch (roundResult) {
      case "tie":
        break;
      case "victory":
        playerScore++;
        break;
      case "loss":
        computerScore++;
        break;
    }

    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
  }

  // for (let i = 0; i < 5; i++) {
  //   if (roundResult.includes("tie")) {
  //     continue;
  //   } else {
  //     roundResult.includes("win") ? playerScore++ : computerScore++;
  //   }
  // }
  // console.log("Five rounds have finished.");
  // console.log(`Player score: ${playerScore}.`);
  // console.log(`Computer score: ${computerScore}.`);
  // if (playerScore > computerScore) {
  //   console.log("You won the game! Hurray!");
  // } else if (playerScore < computerScore) {
  //   console.log("You lost the game, sorry. :(");
  // } else {
  //   console.log("The game ended in tie.");
  // }
}

// game();
