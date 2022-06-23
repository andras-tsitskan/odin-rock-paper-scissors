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

function getPlayerSelection() {
  let playerSelection = prompt("Select rock, paper or scissors.").toLowerCase();
  return playerSelection;
}

function playRound(playerSelection, computerSelection) {
  const round = {
    result: "",
    message: "",
  };

  if (playerSelection === computerSelection) {
    round.result = "tie";
    round.message = "It is a tie!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    round.result = "loss";
    round.message = "You lose. :( Paper beats rock.";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    round.result = "victory";
    round.message = "You win! :) Rock beats scissors.";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    round.result = "victory";
    round.message = "You win! :) Paper beats rock.";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    round.result = "loss";
    round.message = "You lose. :( Scissors beat paper.";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    round.result = "loss";
    round.message = "You lose. :( Rock beats scissors.";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    round.result = "victory";
    round.message = "You win! :) Scissors beat paper.";
  } else {
    round.message = "Something went wrong. Try again.";
  }

  return round;
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let round = playRound(getPlayerSelection(), getComputerSelection());
    let roundResult = round.result;
    let roundMessage = round.message;

    if (roundResult === "tie") {
      console.log(roundMessage);
      continue;
    } else if (roundResult === "victory") {
      playerScore++;
      console.log(roundMessage);
    } else if (roundResult === "loss") {
      computerScore++;
      console.log(roundMessage);
    } else {
      console.log(roundMessage);
      continue;
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

game();
