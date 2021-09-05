const choices = ["rock", "paper", "scissors"];

function computerPlay() {
  let randomNum = Math.floor(Math.random() * choices.length);
  return choices[randomNum];
}

function dislayMessage(status, playerSelection, computerSelection) {
  if (status === "win") {
    return `You win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`;
  } else if (status === "lose") {
    return `You lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`;
  } else if (status === "same") {
    return `${computerSelection.toUpperCase()} and ${playerSelection.toUpperCase()} are the same!`;
  } else {
    return `Please enter a valid input!`;
  }
}

function checkChoice(playerSelection, computerSelection) {
  switch (playerSelection) {
    case choices[0]:
      if (computerSelection === choices[1]) {
        return dislayMessage("lose", playerSelection, computerSelection);
      } else if (computerSelection === choices[2]) {
        return dislayMessage("win", playerSelection, computerSelection);
      } else {
        return dislayMessage("same", playerSelection, computerSelection);
      }
      break;
    case choices[1]:
      if (computerSelection === choices[0]) {
        return dislayMessage("win", playerSelection, computerSelection);
      } else if (computerSelection === choices[2]) {
        return dislayMessage("lose", playerSelection, computerSelection);
      } else {
        return dislayMessage("same", playerSelection, computerSelection);
      }
      break;
    case choices[2]:
      if (computerSelection === choices[0]) {
        return dislayMessage("lose", playerSelection, computerSelection);
      } else if (computerSelection === choices[1]) {
        return dislayMessage("win", playerSelection, computerSelection);
      } else {
        return dislayMessage("same", playerSelection, computerSelection);
      }
      break;
    default:
      return dislayMessage("invalid", playerSelection, computerSelection);
  }
}

function playRound(playerSelection, computerSelection) {
  return checkChoice(playerSelection, computerSelection);
}

function game() {
  console.log(
    playRound(prompt("Rock, Paper or Scissors?").toLowerCase(), computerPlay())
  );
  console.log(
    playRound(prompt("Rock, Paper or Scissors?").toLowerCase(), computerPlay())
  );
  console.log(
    playRound(prompt("Rock, Paper or Scissors?").toLowerCase(), computerPlay())
  );
  console.log(
    playRound(prompt("Rock, Paper or Scissors?").toLowerCase(), computerPlay())
  );
  console.log(
    playRound(prompt("Rock, Paper or Scissors?").toLowerCase(), computerPlay())
  );
}

game();