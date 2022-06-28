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
  }
  return computerSelection;
}

const playerChoiceButtons = document.querySelectorAll(".js-btn");
const playerChoiceSpan = document.querySelector("#js-player-choice");
const computerChoiceSpan = document.querySelector("#js-computer-choice");
const roundResultSpan = document.querySelector("#js-round-result");
const playerScoreSpan = document.querySelector("#js-player-score");
const computerScoreSpan = document.querySelector("#js-computer-score");
const messageSpan = document.querySelector("#js-message");
const resetButton = document.querySelector("#js-btn-reset");

for (const button of playerChoiceButtons) {
  button.addEventListener("click", playRound);
}

function getPlayerSelection(event) {
  return event.target.textContent.toLowerCase();
}

let playerScore = 0;
let computerScore = 0;

function playRound() {
  if (playerScore < 5 && computerScore < 5) {
    messageSpan.textContent = "Next round. Choose again.";

    let playerSelection = getPlayerSelection(event);
    playerChoiceSpan.textContent = `You chose ${playerSelection}`;

    let computerSelection = getComputerSelection();
    computerChoiceSpan.textContent = `Computer chose ${computerSelection}`;

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
        ++computerScore;
        break;
      case playerSelection === "rock" && computerSelection === "scissors":
        round.result = "victory";
        round.message = "You win! :) Rock beats scissors.";
        ++playerScore;
        break;
      case playerSelection === "paper" && computerSelection === "rock":
        round.result = "victory";
        round.message = "You win! :) Paper beats rock.";
        ++playerScore;
        break;
      case playerSelection === "paper" && computerSelection === "scissors":
        round.result = "loss";
        round.message = "You lose. :( Scissors beat paper.";
        ++computerScore;
        break;
      case playerSelection === "scissors" && computerSelection === "rock":
        round.result = "loss";
        round.message = "You lose. :( Rock beats scissors.";
        ++computerScore;
        break;
      case playerSelection === "scissors" && computerSelection === "paper":
        round.result = "victory";
        round.message = "You win! :) Scissors beat paper.";
        ++playerScore;
        break;
    }

    roundResultSpan.textContent = round.message;
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;

    postGame();

    return round;
  }
}

function resetGame() {
  playerChoiceSpan.textContent = "";
  computerChoiceSpan.textContent = "";
  roundResultSpan.textContent = "";
  playerScore = 0;
  computerScore = 0;
  playerScoreSpan.textContent = playerScore;
  computerScoreSpan.textContent = computerScore;
  messageSpan.textContent = "Let's begin! Make your choice.";
}

resetButton.addEventListener("click", resetGame);

function postGame() {
  if (playerScore == 5) {
    messageSpan.textContent =
      "VICTORY! You won the game! If you want to play again, click reset.";
  } else if (computerScore == 5) {
    messageSpan.textContent =
      "That's bad, computer won the game. Click reset to start again.";
  }
}
