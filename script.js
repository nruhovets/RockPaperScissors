function computerPlay(){
    let computerSelection = Math.ceil(Math.random() * 3);

    switch (computerSelection) {
        
        case 1: //rock
            console.log('Rock');
            return "rock";
            break;

        case 2: //paper
            console.log('Paper');
            return "paper";
            break;

        case 3: //scissors
            console.log('Scissors');
            return "scissors";
            break;

        default:
            console.log('Error');
    }

}

function playerPlay(){
    let playerSelection = prompt("Please enter rock, paper, or scissors.").toLowerCase();
    if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors")
        {
            alert("Selection was not understood. Please check spelling and try again.");
            playerSelection = playerPlay();
        }
    console.log(playerSelection);
    return playerSelection;
}