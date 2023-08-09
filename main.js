function getPlayerChoice(){
    let choice = prompt('Choose rock, paper or scissors');
    return choice.toLowerCase();
}

function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function letsPlay(playerChoice, computerChoice){
    if(playerChoice === computerChoice) {
        return "You tied. Play Again";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return "You win!";
    } else {
        return `You lost! ${computerChoice} beats ${playerChoice}`;
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    
    for(let i = 0; i < 5; i++){
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        
        let result = letsPlay(playerChoice, computerChoice);
        console.log(`Round ${i+1}: ${result}`);
        
        if(result === "You win!") {
            playerScore++;
        } else if (result.includes("You lost")) {
            computerScore++;
        }
    }
    
    console.log(`Final score: You ${playerScore} - Computer ${computerScore}`);
}

game();