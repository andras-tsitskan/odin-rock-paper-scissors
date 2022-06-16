function getComputerSelection() {
  let computerSelection;
  let randomNumber = Math.ceil(Math.random() * 3);
  console.log(randomNumber);
  switch (randomNumber) {
    case 1:
      computerSelection = "Rock";
      break;
    case 2:
      computerSelection = "Paper";
    case 3:
      computerSelection = "Scissors";
    default:
      break;
  }
  console.log(computerSelection);
  return computerSelection;
}

getComputerSelection();
