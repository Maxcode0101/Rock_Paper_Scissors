/** DOM-VARIABLES **/
/* Sections */
const welcome_section = document.getElementById("welcome");
const rules_section = document.getElementById("rules");
const gameArea_section = document.getElementById("game-area");

/** GAME-AREA **/
/* Scores & Stats */
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const playerSelection = document.getElementById("player-choice");
const computerSelection = document.getElementById("computer-choice");

/* Click & Play */
const choices_div = document.getElementsByClassName(".choices");
const rock_btn = document.getElementById("rock");
const paper_btn = document.getElementById("paper");
const scissors_btn = document.getElementById("scissors");
const reset_btn = document.getElementById("reset");


function getComputerChoice() {
    const choices = ['r', 'p', 's',];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win! 🔥`;
}



function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You lost... 😞`;
}

function draw(userChoice, computerChoice) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. It´s a draw... `;
}

function game(userChoice) {
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

function main() {
    rock_btn.addEventListener('click', () => game("r"));
    paper_btn.addEventListener('click', () => game("p"));
    scissors_btn.addEventListener('click', () => game("s"));
}

main();
