function computerPlay(){
    let computerSelection = Math.ceil(Math.random() * 3);

    switch (computerSelection) {
        
        case 1: //rock
            console.log('computer picks rock');
            return "rock";
            break;

        case 2: //paper
            console.log('computer picks paper');
            return "paper";
            break;

        case 3: //scissors
            console.log('computer picks scissors');
            return "scissors";
            break;

        default:
            console.log('Error');
    }

}

function playerPlay(){
    let playerSelection = prompt("Please enter rock, paper, or scissors.").toLowerCase();
    if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors"){
            alert("Selection was not understood. Please check spelling and try again.");
            playerSelection = playerPlay();
        }
    console.log(playerSelection);
    return playerSelection;
}

function playRound(){
    
    let playerSelection = playerPlay();
    let computerSelection = computerPlay();

    if (playerSelection === computerSelection){
        console.log("It's a tie!")
        return 0;
    }
    else if ((playerSelection === "rock" && computerSelection === "scissors")
    ||(playerSelection === "scissors" && computerSelection === "paper")
    ||(playerSelection === "paper" && computerSelection === "rock")){
        console.log(`You win! ${playerSelection} beats ${computerSelection}`)
        return 1;
        
    }
    else{
        console.log(`The computer wins :( ${computerSelection} beats ${playerSelection}`)
        return -1;
    }
}

function game(){
    let playerWins = 0;
    for (i=0; i<5; i++){
        playerWins += playRound();
    }
    if (playerWins === 0){
        console.log("The game is a tie!")
    }
    else if (playerWins > 0){
        console.log(`You win the game!`)
    }
    else{
        console.log(`You lose the game`)
    }

}