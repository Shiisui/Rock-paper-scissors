let rounds = 0;
let stopit = document.getElementById('stop');

let finished = 1;

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    computerPlayed = Math.floor(Math.random()*3) + 1;
    
    if (computerPlayed === 1) {
        return "Rock";
    }
    else if (computerPlayed === 2) {
        return "Paper";
    }
    else {
        return "Scissors";
    }

    
}
function playRound(playerSelection, computerSelection) {

    let player = playerSelection;
    let computer = computerSelection;

        if (computer === player) {
            
            return "tie";
        }
     
         else if (player === "Paper" && computer === "Rock" || player === "Scissors" && computer === "Paper" || player === "Rock" && computer === "Scissors") {
             return "player";
        }
        else {
            return "computer";
        }
     
}
function dothis (e){
    let score;
    let player;
    let computer;
    
        if (rounds >= 5) {
            
        while (stopit.firstChild) {
            stopit.removeChild(stopit.firstChild);
          }
          
          gameResult(true);
            finished = 1;
            rounds = 0;
            computerScore = 0;
            playerScore = 0;
         }
        else if (e.target == rock){
            player = "Rock";
            computer = computerPlay();
            score = playRound(player, computer );
            console.log(player);
            console.log(computer);
            console.log(score);

            rounds++;
            
        }
        else if (e.target == paper) {
            player = "Paper";
            computer = computerPlay();
            score = playRound(player, computer);
            console.log(player);
            console.log(computer);
            console.log(score);


            rounds++;

        }
         else if (e.target == scissors) {
            player = "Scissors";
            computer = computerPlay();
            score = playRound(player, computer);
            console.log(player);
            console.log(computer);
            console.log(score);

            rounds++;
            
        }
        roundResult(score);
        gameResult(score);
       
       
        

}

let gameStart = document.getElementById("start");
gameStart.addEventListener("click", startThegame);

function roundResult (score) {
    switch(score) {
        case "player":
            newDiv.textContent = "You win!";
        break;

        case "computer":
            newDiv.textContent = "You lost!";
        break;

        
    }
}




function startThegame(e) {
        if (e && finished === 1) {
    let rock = document.createElement('button');
    let paper = document.createElement('button');
    let scissors = document.createElement('button');
        
    rock.setAttribute('id','rock');
    paper.setAttribute('id','paper');
    scissors.setAttribute('id','scissors');

    rock.textContent = "Rock";
    paper.textContent = "Paper";
    scissors.textContent = "Scissors";


    stopit.appendChild(rock);
    stopit.appendChild(paper);
    stopit.appendChild(scissors);


    rock.addEventListener('click', dothis);
    paper.addEventListener('click', dothis);
    scissors.addEventListener('click', dothis);

    finished = 0;

}

}

let newDiv = document.querySelector('div');






function gameResult(score) {
        
        

        
            switch (score) {
            case "player":
                playerScore++;
            break;

            case "computer":
                computerScore++;
            break;

            


    }
if (rounds >= 5) {
    if (playerScore > computerScore) {
        newDiv.textContent = "You won the game \n\n" + "Player Result: " +`${playerScore}\n\n` + "Computer Result: " + `${computerScore}`;
    }
    else if (playerScore < computerScore) {
        newDiv.textContent = "You lost the game \n\n" + "Player Result: " +`${playerScore}\n\n` + "Computer Result: " + `${computerScore}`;
    }
    else if (playerScore === computerScore){
        newDiv.textContent = "The game is a tie \n\n" + "Player Result: " +`${playerScore}\n\n` + "Computer Result: " + `${computerScore}`;
    }
}
           
}
