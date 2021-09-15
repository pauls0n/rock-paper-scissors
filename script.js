const body = document.querySelector("body");

const scoreContainer = document.createElement("div");
scoreContainer.classList.add("score-container");

const scoreDiv = document.createElement("div");
scoreDiv.classList.add("score-div");

const scoreTitle = document.createElement("p");
scoreTitle.classList.add("score-title");

let score = document.createElement("strong");
score.classList.add("score");

scoreDiv.appendChild(scoreTitle);
scoreDiv.appendChild(score);
scoreContainer.appendChild(scoreDiv.cloneNode(true));
scoreContainer.appendChild(scoreDiv.cloneNode(true));
scoreContainer.firstChild.firstChild.textContent = "You";
scoreContainer.lastChild.firstChild.textContent = "Computer";

let gameMessage = document.createElement("strong");
gameMessage.classList.add("game-message");

const popupContainer = document.createElement("div");
popupContainer.classList.add("popup-container");

const popupDiv = document.createElement("div");
popupDiv.classList.add("popup-div");

let gameStatus = document.createElement("strong");
gameStatus.classList.add("game-status");

const playAgainBtn = document.createElement("button");
playAgainBtn.classList.add("play-again");
playAgainBtn.setAttribute("type", "button");
playAgainBtn.innerHTML = "&#x21ba;";

popupDiv.appendChild(gameStatus);
popupDiv.appendChild(playAgainBtn);
popupContainer.appendChild(popupDiv);

const footer = document.querySelector("footer");

const buttons = document.querySelectorAll(".choice");

const choices = ["rock", "paper", "scissors"];

function computerPlay() {
  let randomNum = Math.floor(Math.random() * choices.length);
  return choices[randomNum];
}

function dislayMessage(status, playerSelection, computerSelection) {
  if (status === "win") {
    return `You got +1 point! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}!`;
  } else if (status === "lose") {
    return `Computer got +1 point! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}!`;
  } else {
    return `No point! ${computerSelection.toUpperCase()} and ${playerSelection.toUpperCase()} are the same!`;
  }
}

function checkChoice(playerSelection, computerSelection) {
  switch (playerSelection) {
    case choices[0]:
      switch (computerSelection) {
        case choices[1]:
          return "lose";
          break;
        case choices[2]:
          return "win";
          break;
        default:
          return "same";
      }
      break;
    case choices[1]:
      switch (computerSelection) {
        case choices[0]:
          return "win";
          break;
        case choices[2]:
          return "lose";
          break;
        default:
          return "same";
      }
      break;
    case choices[2]:
      switch (computerSelection) {
        case choices[0]:
          return "lose";
          break;
        case choices[1]:
          return "win";
          break;
        default:
          return "same";
      }
  }
}


let playerScore = 0;
let computerScore = 0;

function endGame() {
  if (playerScore === 5) {
    body.appendChild(popupContainer);
    gameStatus.innerHTML = `You win! <br> Your score: ${playerScore} <br> Computer score: ${computerScore}`;
  } else if (computerScore === 5) {
    body.appendChild(popupContainer);
    gameStatus.innerHTML = `You lose! <br> Your score: ${playerScore} <br> Computer score: ${computerScore}`;
  }
}

function playAgain() {
  playerScore = 0;
  computerScore = 0;
  body.removeChild(scoreContainer);
  body.removeChild(gameMessage);
  body.removeChild(popupContainer);
}

function playRound(e) {
  let playerSelection = e.target.getAttribute("data-choice");
  let computerSelection = computerPlay();
  let status = checkChoice(playerSelection, computerSelection);
  switch (status) {
    case "win":
      playerScore += 1;
      break;
    case "lose":
      computerScore += 1;
      break;
  }
  body.insertBefore(scoreContainer, footer);
  body.insertBefore(gameMessage, footer);
  scoreContainer.firstChild.lastChild.textContent = playerScore;
  scoreContainer.lastChild.lastChild.textContent = computerScore;
  gameMessage.textContent = dislayMessage(
    status,
    playerSelection,
    computerSelection
  );
  endGame();
}

buttons.forEach((button) => {
  button.addEventListener("click", playRound);
});

playAgainBtn.addEventListener("click", playAgain);