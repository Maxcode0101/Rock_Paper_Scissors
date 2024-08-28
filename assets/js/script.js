/** DOM-VARIABLES **/
/* Sections */
const welcome_section = document.getElementById("welcome");
const rules_section = document.getElementById("rules");
const gameArea_section = document.getElementById("game-area");

/** GAME-AREA **/
/* Scores & Stats */
const userScore = 0;
const computerScore = 0;
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
    const choices = ['rock', 'paper', 'scissors', 'reset'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
}

function main() {
    rock_div.addEventListener('click', function() {
        game("rock");
    })
    
    paper_div.addEventListener('click', function() {
        game("paper");
    })
    
    scissors_div.addEventListener('click', function() {
        game("scissors");
    })
    
    reset_div.addEventListener('click', function() {
        game("reset");
    })
}

main();
