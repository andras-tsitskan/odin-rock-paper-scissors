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
const playerScoreSpan = document.querySelector("#js-player-score");
const computerScoreSpan = document.querySelector("#js-computer-score");

function getPlayerSelection() {
  let playerSelection = prompt("Select rock, paper or scissors.");
  playerSelection = playerSelection.toLowerCase();
  return playerSelection;
}

function playRound(playerSelection, computerSelection) {
  let roundResult;
  if (playerSelection === computerSelection) {
    roundResult = "It is a tie!";
  } else {
    switch (true) {
      case playerSelection === "rock" && computerSelection === "paper":
        roundResult = "You lose. :( Paper beats rock.";
        break;
      case playerSelection === "rock" && computerSelection === "scissors":
        roundResult = "You win! :) Rock beats scissors.";
        break;
      case playerSelection === "paper" && computerSelection === "rock":
        roundResult = "You win! :) Paper beats rock.";
        break;
      case playerSelection === "paper" && computerSelection === "scissors":
        roundResult = "You lose. :( Scissors beat paper.";
        break;
      case playerSelection === "scissors" && computerSelection === "rock":
        roundResult = "You lose. :( Rock beats scissors.";
        break;
      case playerSelection === "scissors" && computerSelection === "paper":
        roundResult = "You win! :) Scissors beat paper.";
        break;

      default:
        roundResult = "Something went wrong. Try again.";
        break;
    }
  }
  console.log(roundResult);
  return roundResult;
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
