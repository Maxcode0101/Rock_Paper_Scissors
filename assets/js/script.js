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
/* Click & Play */
const choices_div = document.getElementsByClassName(".choices");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const reset_div = document.getElementById("reset");


function getComputerChoice() {
    const choices = ['r', 'p', 's', 're'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertToWord (letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub;
    const smallCompWord = "computer".fontsize(3).sub;
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win! 🔥`;
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub;
    const smallCompWord = "computer".fontsize(3).sub;
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You lost... 😞`;
}

function draw(userChoice, computerChoice) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub;
    const smallCompWord = "computer".fontsize(3).sub;
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. It´s a draw... `;
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "pr":
        case "rs":
        case "sp":
            win();
            break;
        case "rp":
        case "sr":
        case "ps":
            lose();
            break;
        case "rr":
        case "ss":
        case "pp":
            draw();
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })
    
    paper_div.addEventListener('click', function() {
        game("p");
    })
    
    scissors_div.addEventListener('click', function() {
        game("s");
    })
    
    reset_div.addEventListener('click', function() {
        game("re");
    })
}

main();
