let buttons = document.querySelectorAll('.button');
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let endGame = document.getElementById("end-game");
let resetButton = document.getElementById("reset-button");
let game = document.getElementById("game");

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let img = button.querySelector('img');
        playerSelection = img.alt;
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);

        if (playerScore === 5 || computerScore === 5) {
            getWinner();
        }
    });
});

const arrayPlay = ["rock", "paper", "scissors"];

function computerPlay() {
    return arrayPlay[Math.round((Math.random() * arrayPlay.length))];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
    }
    else if ((computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "rock")) {
        computerScore = ++computerScore;
        updateComputerScore();
    }
    else {
        playerScore = ++playerScore;
        updatePlayerScore();
    }
}

function updatePlayerScore() {
    let playerScoreText = document.getElementById('player-score');
    playerScoreText.textContent = playerScore;

}

function updateComputerScore() {
    let computerScoreText = document.getElementById('computer-score');
    computerScoreText.textContent = computerScore;
}

function getWinner() {
    terminateGame();
    if (playerScore > computerScore) {
        endGame.textContent = "You win!";
    } 
    else {
        endGame.textContent = "You lost..";
    }
    resetButton.textContent = "Play Again";
    endGame.style.display = "block";
    resetButton.style.display = "block";
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updatePlayerScore();
    updateComputerScore();
    endGame.style.display = "none";
    resetButton.style.display = "none";
    endGame.textContent = "";
    resetButton.textContent = "";
    game.style.display = "flex";
}

function terminateGame() {
    game.style.display = "none";
    resetButton.onclick = () => resetGame();
}
