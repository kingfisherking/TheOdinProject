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

function playRound(humanChoice, computerChoice){
    let human = humanChoice.toLowerCase();
    let computer = computerChoice.toLowerCase();
    if(human == computer){
        console.log("Tie");
    } else{
        if(human == "rock"){
            computer == "paper" ? 
            console.log("You lose! Paper beats Rock") : 
            console.log("You win! Rock beats Scissors");
            computer == "paper" ? computerScore++ : playerScore++;
        }
        if(human == "paper"){
            computer == "scissors" ? 
            console.log("You lose! Scissors beats Paper") : 
            console.log("You win! Paper beats Rock");
            computer == "scissors" ? computerScore++ : playerScore++;
        }
        if(human == "scissors"){
            computer == "rock" ? 
            console.log("You lose! Rock beats Scissors") : 
            console.log("You win! Scissors beats Paper");
            computer == "rock" ? computerScore++ : playerScore++;
        }
    }
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

playGame();