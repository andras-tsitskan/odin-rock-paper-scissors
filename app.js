"use strict";

function getComputerSelection() {
  let computerSelection;
  let randomNumber = Math.ceil(Math.random() * 3);
  //   console.log(randomNumber);
  switch (randomNumber) {
    case 1:
      computerSelection = "rock";
      break;
    case 2:
      computerSelection = "paper";
    case 3:
      computerSelection = "scissors";
    default:
      break;
  }
  console.log(`Computer selection: ${computerSelection}`);
  return computerSelection;
}

// getComputerSelection();

function getPlayerSelection() {
  let playerSelection = prompt("Select rock, paper or scissors.");
  playerSelection = playerSelection.toLowerCase();
  console.log(`Player selection: ${playerSelection}`);
  return playerSelection;
}

// getPlayerSelection();

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

playRound(getPlayerSelection(), getComputerSelection());
// console.log(roundResult);
