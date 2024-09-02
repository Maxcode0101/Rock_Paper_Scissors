/* jshint esversion: 11 */

/** DOM-VARIABLES **/
/* Sections */
const welcomeSection = document.getElementById("welcome");
const gameAreaSection = document.getElementById("game-area");

/** WELCOME-AREA **/
const welcomeDiv = document.getElementById("welcome-text");
const closeBtn = document.getElementById("close-button");

/** GAME-AREA **/
/* Scores & Stats */
let userScore = 0;
let computerScore = 0;
const userScoreSpan = document.getElementById("player-score");
const computerScoreSpan = document.getElementById("computer-score");
const scoreBoardDiv = document.querySelector(".score-board");
const resultDiv = document.querySelector(".result");
const playerSelection = document.getElementById("player-choice");
const computerSelection = document.getElementById("computer-choice");
const hands = document.querySelectorAll(".hand");

/* Click & Play */
const choicesDiv = document.getElementsByClassName(".choices");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resetBtn = document.getElementById("reset");
const nextBtn = document.getElementById("next");

// Timer variables
let timer = document.querySelector('#timer');
let countDownInterval;
let timeLeft = 4;

closeBtn.addEventListener('click', () => {
    welcomeSection.classList.toggle('visibility-toggle')
    gameAreaSection.classList.toggle('visibility-toggle')
    setTimeout(() => {
        countDownInterval = setInterval(countDown, 1000);
        hands.forEach(hand => {
            hand.classList.toggle("disable");
        });
    }, 2000);
})

resetBtn.addEventListener('click', () => {
    window.location.reload("Refresh")
})

function getComputerChoice() {
    const choices = ['r', 'p', 's', ];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    resultDiv.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win! 🔥`;
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    resultDiv.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You lost... 😞`;
}

function expired() {
    computerScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    resultDiv.innerHTML = `You ran out of time. You lost... ⌛`;
}

function draw(userChoice, computerChoice) {
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    resultDiv.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. It's a draw... `;
}

function game(userChoice) {
    clearInterval(countDownInterval);
    hands.forEach(hand => {
        hand.classList.toggle("disable");
    });

    nextBtn.classList.toggle('visibility-toggle');
    const computerChoice = getComputerChoice();
    playerSelection.innerText = convertToWord(userChoice);
    computerSelection.innerText = convertToWord(computerChoice);
    switch (userChoice + computerChoice) {
        case "pr":
        case "rs":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "sr":
        case "ps":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "ss":
        case "pp":
            draw(userChoice, computerChoice);
            break;
    }
}


main();

function main() {
    rockBtn.addEventListener('click', () => game("r"));
    paperBtn.addEventListener('click', () => game("p"));
    scissorsBtn.addEventListener('click', () => game("s"));
}


function countDown() {
    timeLeft--;
    timer.innerText = `Seconds: ${timeLeft}`;
    if (timeLeft === 0) {
        clearInterval(countDownInterval);
        hands.forEach(hand => {
            hand.classList.toggle("disable");
        });
        nextBtn.classList.toggle('visibility-toggle');
        expired();
    }
}


nextBtn.addEventListener("click", nextRound);

function nextRound() {
    playerSelection.innerText = "";
    computerSelection.innerText = "";
    nextBtn.classList.toggle('visibility-toggle');
    timeLeft = 4;
    timer.innerText = "LOADING";
    setTimeout(() => {
        countDownInterval = setInterval(countDown, 1000);
        hands.forEach(hand => {
            hand.classList.toggle("disable");
        });
    }, 2000);
}