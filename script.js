"use strict";

const signs = ["rock", "paper", "scissors"];
let playerSign, opponentSign, scorePlayer, scoreOpponent, playing;

// selectors
const endEl = document.querySelector(".end");
const btnRock = document.querySelector(".btn-rock");
const btnPaper = document.querySelector(".btn-paper");
const btnScissors = document.querySelector(".btn-scissors");
const btnRestart = document.querySelector(".btn-restart");

const playerSingEl = document.getElementById("player-sign");
const opponentSingEl = document.getElementById("opponent-sign");
const playerCurrentEl = document.querySelector(".player-current");
const opponentCurrentEl = document.querySelector(".opponent-current");
const messageEl = document.querySelector(".message");

// Initializing a game
const init = function () {
  playerSign = "";
  opponentSign = "";
  scorePlayer = 0;
  scoreOpponent = 0;
  playing = true;

  endEl.classList.add("hidden");
  opponentSingEl.src = "start.png";
  playerSingEl.src = "start.png";

  playerCurrentEl.textContent = "0";
  opponentCurrentEl.textContent = "0";
  messageEl.textContent = "Have Fun!";
  messageEl.style.color = "black";
};

// choose player's sign
const playerClickSign = function (sign) {
  playerSingEl.src = `${sign}.png`;
  playerSign = sign;
};

// randomize opponent's sign
const randomSign = function (arr) {
  const randomIndex = Math.trunc(Math.random() * arr.length);
  const item = arr[randomIndex];
  opponentSingEl.src = `${arr[randomIndex]}.png`;
  return item;
};

// score increaser
const playerScoreIncrease = function () {
  scorePlayer += 1;
  playerCurrentEl.textContent = scorePlayer;
};
const opponentScoreIncrease = function () {
  scoreOpponent += 1;
  opponentCurrentEl.textContent = scoreOpponent;
};

// win condition
const isWinner = function () {
  if (scorePlayer >= 3) {
    playing = false;
    messageEl.textContent = "Player Wins! 😎";
    messageEl.style.color = "#68e168";
    endEl.classList.remove("hidden");
  } else if (scoreOpponent >= 3) {
    playing = false;
    messageEl.textContent = "Opponent Wins! 😢";
    messageEl.style.color = "red";
    endEl.src = "lose.png";
    endEl.classList.remove("hidden");
  }
};

init();

btnRock.addEventListener("click", function () {
  if (playing) {
    playerClickSign(signs[0]);
    // randomize opponent's sign
    opponentSign = randomSign(signs);
    if (opponentSign == "paper") {
      opponentScoreIncrease();
      isWinner();
    } else if (opponentSign == "scissors") {
      playerScoreIncrease();
      isWinner();
    } else console.log("It's a draw!");
  }
});

btnPaper.addEventListener("click", function () {
  if (playing) {
    playerClickSign(signs[1]);
    // randomize opponent's sign
    opponentSign = randomSign(signs);
    if (opponentSign == "scissors") {
      opponentScoreIncrease();
      isWinner();
    } else if (opponentSign == "rock") {
      playerScoreIncrease();
      isWinner();
    } else console.log("It's a draw!");
  }
});

btnScissors.addEventListener("click", function () {
  if (playing) {
    playerClickSign(signs[2]);
    // randomize opponent's sign
    opponentSign = randomSign(signs);
    if (opponentSign == "rock") {
      opponentScoreIncrease();
      isWinner();
    } else if (opponentSign == "paper") {
      playerScoreIncrease();
      isWinner();
    } else console.log("It's a draw!");
  }
});

btnRestart.addEventListener("click", init);
