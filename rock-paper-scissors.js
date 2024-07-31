let score = JSON.parse(localStorage.getItem("sco")) || {
  wins: 0,
  loses: 0,
  ties: 0,
};
function updateScoreElement() {
  document.querySelector(
    ".scores"
  ).innerHTML = `Your score is wins=${score.wins},loses=${score.loses},ties=${score.ties}.`;
}
function playGame(playerMove) {
  const computerMove = pickComputerMove();
  if (playerMove === "scissor") {
    if (computerMove === "rock") {
      result = "You lost";
    } else if (computerMove === "paper") {
      result = "You win";
    } else {
      result = "Tie";
    }
    pickScore();
    document.querySelector(".res").innerHTML = `${result}.`;
    document.querySelector(
      ".whoWin"
    ).innerHTML = `You <img style='justify-content:center;align-items:center;' src='${playerMove}.jpg' width=100px height=100px> <img style='justify-content:center;align-items:center;' src='${computerMove}.jpg' width=100px height=100px> Computer.`;
    document.querySelector(
      ".scores"
    ).innerHTML = `Your score is wins=${score.wins},loses=${score.loses},ties=${score.ties}.`;
  } else if (playerMove === "paper") {
    const computerMove = pickComputerMove();
    if (computerMove === "rock") {
      result = "You win";
    } else if (computerMove === "paper") {
      result = "Tie";
    } else {
      result = "You lost";
    }
    pickScore();
    document.querySelector(".res").innerHTML = `${result}.`;
    document.querySelector(
      ".whoWin"
    ).innerHTML = `You <img style='justify-content:center;align-items:center;' src='${playerMove}.jpg' width=100px height=100px> <img style='justify-content:center;align-items:center;' src='${computerMove}.jpg' width=100px height=100px> Computer.`;
    document.querySelector(
      ".scores"
    ).innerHTML = `Your score is wins=${score.wins},loses=${score.loses},ties=${score.ties}.`;
  } else {
    if (computerMove === "rock") {
      result = "Tie";
    } else if (computerMove === "paper") {
      result = "You lost";
    } else {
      result = "You win";
    }
    pickScore();
    document.querySelector(".res").innerHTML = `${result}.`;
    document.querySelector(
      ".whoWin"
    ).innerHTML = `You <img style='justify-content:center;align-items:center;' src='${playerMove}.jpg' width=100px height=100px> <img style='justify-content:center;align-items:center;' src='${computerMove}.jpg' width=100px height=100px> Computer.`;
    document.querySelector(
      ".scores"
    ).innerHTML = `Your score is wins=${score.wins},loses=${score.loses},ties=${score.ties}.`;
  }
}
function pickScore() {
  if (result === "You win") {
    score.wins += 1;
  } else if (result === "You lost") {
    score.loses += 1;
  } else {
    score.ties += 1;
  }
  storeScore();
}
function storeScore() {
  localStorage.setItem("sco", JSON.stringify(score));
}
function pickComputerMove() {
  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else {
    computerMove = "scissor";
  }
  return computerMove;
}
