"use strict";

function getComputerSelection() {
  let computerSelection;
  let randomNumber = Math.ceil(Math.random() * 3);
  console.log(randomNumber);
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
  console.log(computerSelection);
  return computerSelection;
}

getComputerSelection();

function getPlayerSelection() {
  let playerSelection = prompt("Select rock, paper or scissors.");
  playerSelection = playerSelection.toLowerCase();
  console.log(playerSelection);
}

getPlayerSelection();

// function singleRound(playerSelection, computerSelection) {}
