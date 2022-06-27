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
      break;
    case playerSelection === "rock" && computerSelection === "scissors":
      round.result = "victory";
      round.message = "You win! :) Rock beats scissors.";
      break;
    case playerSelection === "paper" && computerSelection === "rock":
      round.result = "victory";
      round.message = "You win! :) Paper beats rock.";
      break;
    case playerSelection === "paper" && computerSelection === "scissors":
      round.result = "loss";
      round.message = "You lose. :( Scissors beat paper.";
      break;
    case playerSelection === "scissors" && computerSelection === "rock":
      round.result = "loss";
      round.message = "You lose. :( Rock beats scissors.";
      break;
    case playerSelection === "scissors" && computerSelection === "paper":
      round.result = "victory";
      round.message = "You win! :) Scissors beat paper.";
      break;
  }

  console.log(round);
  return round;
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let roundNumber = 0; roundNumber < 5; roundNumber++) {
    let roundResult = playRound(getPlayerSelection(), getComputerSelection());
    if (roundResult.includes("tie")) {
      continue;
    } else {
      roundResult.includes("win") ? playerScore++ : computerScore++;
    }
  }
  console.log("Five rounds have finished.");
  console.log(`Player score: ${playerScore}.`);
  console.log(`Computer score: ${computerScore}.`);
  if (playerScore > computerScore) {
    console.log("You won the game! Hurray!");
  } else if (playerScore < computerScore) {
    console.log("You lost the game, sorry. :(");
  } else {
    console.log("The game ended in tie.");
  }
}

// game();
