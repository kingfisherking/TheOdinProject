/*
While Game is running
Obtain user input
If input is rock, paper or scissors
continue, else obtain input again
Get random number, compute 3 different states from number
Compare input to 1 of 3 states
Display win, loss, or tie
*/


function getComputerChoice(){
    let state = Math.floor(Math.random()*3);
    switch (state) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
        default:
            return "Rock";
    }
}

function getHumanChoice(){
    let state = prompt("Rock, Paper, or Scissors (Case matters)");
    return state;
}
let playerScore = 0;
let computerScore = 0;

function playRound(humanChoice){
    let human = humanChoice.toLowerCase();
    let computer = getComputerChoice().toLowerCase();
    let result = "";
    let score = document.querySelector("#score");
    if(human == computer){
        result = "Tie!";
    } else{
        if(human == "rock"){
            computer == "paper" ? 
            result = "You lose! Paper beats Rock"  : 
            result = "You win! Rock beats Scissors" ;
            computer == "paper" ? computerScore++ : playerScore++;
        }
        if(human == "paper"){
            computer == "scissors" ? 
            result = "You lose! Scissors beats Paper"  : 
            result = "You win! Paper beats Rock" ;
            computer == "scissors" ? computerScore++ : playerScore++;
        }
        if(human == "scissors"){
            computer == "rock" ? 
            result = "You lose! Rock beats Scissors"  : 
            result = "You win! Scissors beats Paper" ;
            computer == "rock" ? computerScore++ : playerScore++;
        }
    }
    document.querySelector("#results").textContent = result;
    score.textContent = `You: ${playerScore}  Computer: ${computerScore}`;
}
function checkScore(){
    if(playerScore == computerScore){
        console.log("You tied! Nobody wins");
    } else{
        playerScore > computerScore ? console.log("You won! grats") : console.log("Hah, loser");
    }
}

function playGame(){
    for(let x = 1; x<6; x++){
        playRound(getHumanChoice(), getComputerChoice());
        console.log(`You: ${playerScore}   Computer: ${computerScore}`);
        if(x==5){
            checkScore();
        }
    }
    
}