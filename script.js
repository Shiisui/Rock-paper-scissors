let computerPlayed;
const paper = "Paper";
const rock = "Rock";
const scissors = "Scissors";

let player;
let computer;

let playerPts = 0;

let computerPts = 0;



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
function playerPlay() {
    
    // this function have to ask for player input and return it
    // make the player input case insensitive 
    let playerPlayed = prompt("Rock or paper or scissors");

    let playerlowercase = playerPlayed.slice(1).toLowerCase(playerPlayed);
    
    

    let playeruppercase = playerPlayed.slice(0, 1).toUpperCase(playerPlayed);


    playerPlayed = playeruppercase + playerlowercase;

    
    if (playerPlayed === rock) {
        return "Rock";
    }
     if (playerPlayed === paper) {
        return "Paper";
    }
    if (playerPlayed === scissors) {
        return "Scissors";
    }
}





function playRound(playerSelection, computerSelection) {


    

    // this function has to determine the winner of the round and print it out

    let player = playerSelection;
    let computer = computerSelection;

    
    
        if (computer === player) {
            
            console.log( `${player}` + " and " + `${computer}` + " Make's a tie \n\n\n");
        }
     
         else if (player === paper && computer === rock || player === scissors && computer === paper || player === rock && computer === scissors) {
             console.log("You win!" +  ` ${player}` + " beats " + `${computer}\n\n\n`);
             return "player";
        }
        else {
            console.log("You lost!" +  ` ${computer}` + " beats " + `${player}\n\n\n`);
            return "computer";
        }
        
    
    

}


function game() {
    for (let i = 0; i < 5; i++) {
        
        player = playerPlay();
        computer = computerPlay();
        console.log(player,"versus", computer);
        let result = (playRound(player, computer));


        switch (result) {
            case "player":
                playerPts++;
            break;

            case "computer":
                computerPts++;
            break;

        }
     
    }

    if (playerPts > computerPts) {
        console.log("You won the game \n\n" + "Player Result: " +`${playerPts}\n\n` + "Computer Result: " + `${computerPts}`);
    }
    else if (playerPts < computerPts) {
        console.log("You lost the game \n\n" + "Player Result: " +`${playerPts}\n\n` + "Computer Result: " + `${computerPts}`);
    }
    else {
        console.log("The game is a tie \n\n" + "Player Result: " +`${playerPts}\n\n` + "Computer Result: " + `${computerPts}`);
    }
}


let rocky = document.getElementById('rock');
let papery = document.getElementById('paper');
let scissorsy = document.getElementById('scissors');


rocky.addEventListener('click', dothis);
papery.addEventListener('click', dothis);
scissorsy.addEventListener('click', dothis);

console.log(rocky);


function dothis (e){
    
    let player;
    if (e.target == rocky || e.target == papery || e.target == scissorsy ) {
        if (rocky){
            player = "Rock";
            playRound(player, computerPlay());
        }
        else if (papery) {
            player = "Paper";
        }
        else {
            player = "Scissors";
        }
    }
    else return 0;
}