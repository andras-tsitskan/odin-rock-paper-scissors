"use strict";

// Initial values of scores and round number.
let playerScore = 0;
let computerScore = 0;
let roundNumber = 1;

// All the selectors in the order of them appearing in HTML.
const roundNumberSpan = document.querySelector("#js-round-number");
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

function playRound() {
  // Function runs till player or computer reaches score 5.
  if (playerScore < 5 && computerScore < 5) {
    let playerSelection = getPlayerSelection(event);
    playerChoiceSpan.textContent = `You chose ${playerSelection}`;

    let computerSelection = getComputerSelection();
    computerChoiceSpan.textContent = `Computer chose ${computerSelection}`;

    messageSpan.textContent = "Next round. Choose again.";

    let roundMessage;

    switch (true) {
      case playerSelection === computerSelection:
        roundMessage = "It is a tie!";
        break;
      case playerSelection === "rock" && computerSelection === "paper":
        roundMessage = "You lose. :( Paper beats rock.";
        ++computerScore;
        break;
      case playerSelection === "rock" && computerSelection === "scissors":
        roundMessage = "You win! :) Rock beats scissors.";
        ++playerScore;
        break;
      case playerSelection === "paper" && computerSelection === "rock":
        roundMessage = "You win! :) Paper beats rock.";
        ++playerScore;
        break;
      case playerSelection === "paper" && computerSelection === "scissors":
        roundMessage = "You lose. :( Scissors beat paper.";
        ++computerScore;
        break;
      case playerSelection === "scissors" && computerSelection === "rock":
        roundMessage = "You lose. :( Rock beats scissors.";
        ++computerScore;
        break;
      case playerSelection === "scissors" && computerSelection === "paper":
        roundMessage = "You win! :) Scissors beat paper.";
        ++playerScore;
        break;
    }

    // Show round result and update score.
    roundResultSpan.textContent = roundMessage;
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;

    // Update round count.
    roundNumber++;
    roundNumberSpan.textContent = roundNumber;
  }

  // Run game over check.
  gameOver();
}

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

function getPlayerSelection(event) {
  return event.target.textContent.toLowerCase();
}

// Checks whether game is over (player or computer score reaches 5) and then displays game result.
function gameOver() {
  if (playerScore == 5) {
    messageSpan.textContent =
      "VICTORY! You won the game! If you want to play again, click reset.";
  } else if (computerScore == 5) {
    messageSpan.textContent =
      "That's bad, computer won the game. Click reset to start again.";
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
