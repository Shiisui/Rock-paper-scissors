let buttons = document.querySelectorAll('.button');
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let endGame = document.getElementById("end-game");
let resetButton = document.getElementById("reset-button");
let game = document.getElementById("game");
let rpsTitle = document.getElementById("title");
let scoreText = document.getElementById('score');
let textTyping = document.getElementById("text-typing");


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        textTyping.style.display = "none";
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
        updateScore();
    }
    else {
        playerScore = ++playerScore;
        updateScore();
    }
}

function updateScore() {
    scoreText.textContent = `${playerScore} - ${computerScore}`;
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
    updateScore();
    endGame.style.display = "none";
    resetButton.style.display = "none";
    rpsTitle.style.display = "block";
    scoreText.style.display = "flex";
    endGame.textContent = "";
    resetButton.textContent = "";
    textTyping.style.display = "block";
    game.style.display = "flex";
}

function terminateGame() {
    game.style.display = "none";
    rpsTitle.style.display = "none";
    scoreText.style.display = "none";
    resetButton.onclick = () => resetGame();
}


// Animate

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};
