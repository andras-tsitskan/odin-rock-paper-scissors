"use strict";

// Initial values of scores and round number.
let playerScore = 0;
let computerScore = 0;
let roundCount = 1;

// All the selectors in the order of them appearing in HTML.
const roundCounterSpan = document.querySelector("#js-round-counter");
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
    playerChoiceSpan.textContent = `Sinu valik: ${playerSelection}.`;

    let computerSelection = getComputerSelection();
    computerChoiceSpan.textContent = `Arvuti valik: ${computerSelection}.`;

    messageSpan.textContent = "Järgmine ring. Vali uuesti.";

    let roundMessage;

    switch (true) {
      case playerSelection === computerSelection:
        roundMessage = "See ring oli viigis!";
        break;
      case playerSelection === "kivi" && computerSelection === "paber":
        roundMessage = "Sa kaotasid selle ringi. :( Paber võidab kivi.";
        ++computerScore;
        break;
      case playerSelection === "kivi" && computerSelection === "käärid":
        roundMessage = "Sa võitsid selle ringi! :) Kivi võidab käärid.";
        ++playerScore;
        break;
      case playerSelection === "paber" && computerSelection === "kivi":
        roundMessage = "Sa võitsid selle ringi! :) Paber võidab kivi.";
        ++playerScore;
        break;
      case playerSelection === "paber" && computerSelection === "käärid":
        roundMessage = "Sa kaotasid selle ringi. :( Käärid võidavad paberi.";
        ++computerScore;
        break;
      case playerSelection === "käärid" && computerSelection === "kivi":
        roundMessage = "Sa kaotasid selle ringi. :( Kivi võidab käärid.";
        ++computerScore;
        break;
      case playerSelection === "käärid" && computerSelection === "paber":
        roundMessage = "Sa võitsid selle ringi! :) Käärid võidavad paberi.";
        ++playerScore;
        break;
    }

    // Show round result and update score.
    roundResultSpan.textContent = roundMessage;
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;

    // Update round count.
    roundCount++;
    roundCounterSpan.textContent = roundCount;
  }

  // Run game over check.
  gameOver();
}

function getComputerSelection() {
  let computerSelection;
  let randomNumber = Math.ceil(Math.random() * 3);
  switch (randomNumber) {
    case 1:
      computerSelection = "kivi";
      break;
    case 2:
      computerSelection = "paber";
      break;
    case 3:
      computerSelection = "käärid";
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
    messageSpan.classList.add("highlight");
    messageSpan.textContent =
      'VÕIT! Sa võitsid mängu! Kui tahad uuesti mängida, vajuta "Uus mäng".';
  } else if (computerScore == 5) {
    messageSpan.classList.add("highlight");
    messageSpan.textContent =
      'Jama lugu, arvuti võitis. Vajuta "Uus mäng", et uuesti proovida.';
  }
}

// Reset the game to initial values.
function resetGame() {
  roundCount = 1;
  roundCounterSpan.textContent = roundCount;
  messageSpan.classList.remove("highlight");
  messageSpan.textContent =
    "Alustame! Võidab see, kes saab esimesena 5 punkti. Tee oma valik.";
  playerChoiceSpan.innerHTML = "&nbsp;";
  computerChoiceSpan.innerHTML = "&nbsp;";
  roundResultSpan.innerHTML = "&nbsp;";
  playerScore = 0;
  playerScoreSpan.textContent = playerScore;
  computerScore = 0;
  computerScoreSpan.textContent = computerScore;
}

resetButton.addEventListener("click", resetGame);
