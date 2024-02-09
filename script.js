
function getComputerChoice() {
    let randomNumber = Math.random().toFixed(2);    // Generate random number and put into decimal variable
    let computerChoice = "";     // Create a string variable

    if (randomNumber <= 0.33) {     // IF decimal variable >= 0.33 THEN string variable = "Rock"
        return computerChoice = "rock"
    } else if (randomNumber > 0.33 && randomNumber < 0.66) { // ELSE IF decimalVariable < 0.33 AND > 0.66 THEN stringVar = "Paper"
        return computerChoice = "paper" 
    } else {
        return computerChoice = "scissors" // ELSE IF decVar >= 0.66 THEN stringVar = "Scissors"
    }
}


function playRound(playerSelection, computerSelection) {
    // Confirmation of players choices.
    console.log(`Your choice: ${playerSelection}`);

    console.log(`The computer chooses ${computerSelection}!`);


    
    // Deciding who wins the round
    if (playerSelection === computerSelection ) {
        return "Draw!"

    // Rock
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        return "You lose! Paper beats rock!"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return "You win! Rock beats scissors!"

        // Paper
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return "You win! Paper beats rock!"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        return "You lose! Scissors beats paper!"

        // Scissors
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        return "You lose! Rock beats scissors!"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return "You win! Scissors beats paper!"
    } else {
        return "Check your spelling!"
    }
}

let playerScore = 0;
let computerScore = 0;

function playGame() {
    let count = 1;
    
    // Start a new round until there's been 5 rounds.
    while (count < 6) {
        // Display the round number, get both player's choices and play the round.
        console.log(`******** Round ${count} ******** `)

        const computerSelection = getComputerChoice();
        let playerSelection = prompt(`Round ${count} \n\nEnter your choice: Rock, Paper or Scissors!: `);
        
        

        if (playerSelection !== null) {
            // Making the players input case insensitive.
            let playerChoiceLowerCase = playerSelection.toLowerCase();

            // Make sure the player has entered a valid choice
            while (playerChoiceLowerCase != "rock" && playerChoiceLowerCase != "paper" && playerChoiceLowerCase != "scissors") {
                    playerSelection = prompt("Enter a valid choice: Rock, Paper or Scissors!: ");
                    playerChoiceLowerCase = playerSelection.toLowerCase(); // Remember the make the new entry case insensitive
            }

            console.log(playRound(playerChoiceLowerCase, computerSelection));

            //When round is finished increase the round number by 1.
            count++;

            console.log();
        } else {
            console.clear();
            break;
        }
    }

    
    // Display win/lose/draw message based upon result, as well as final score.
    if (playerScore > computerScore) {
        console.log(`FINAL SCORE: ${playerScore}:${computerScore}, YOU WIN THE GAME, `)
    } else if (playerScore < computerScore) {
        console.log(`FINAL SCORE: ${playerScore}:${computerScore}, YOU LOSE THE GAME, `)
    } else {
        console.log(`FINAL SCORE: ${playerScore}:${computerScore}, IT'S A DRAW`)
    }

    playAgain = confirm("Do you want to play again?")

    if (playAgain) {
        playGame();
    }
}

playGame();