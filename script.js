function computerPlay(){
    let computerSelection = Math.ceil(Math.random * 3);

    switch (computerSelection) {
        
        case 1: //rock
            console.log('Rock');
            break;

        case 2: //paper
            console.log('Paper');
            break;

        case 3: //scissors
            console.log('Scissors');
            break;

        default:
            console.log('Error');
    }

}