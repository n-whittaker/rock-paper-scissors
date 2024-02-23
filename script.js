let playerScore = 0;
let computerScore = 0;

const userChoiceText = document.querySelector(".userChoice");
const computerChoiceText = document.querySelector(".computerChoice");

const userScoreText = document.querySelector(".userScore");
const computerScoreText = document.querySelector(".computerScore");

const buttons = document.querySelectorAll(".btn"); // Buttons is a node list
const result = document.querySelector(".result");

const body = document.querySelector("body");

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
    userChoiceText.textContent = playerSelection;
    computerChoiceText.textContent = computerSelection;
    

    // Deciding who wins the round
    if (playerSelection === computerSelection) {
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

function updateScore() {
    if (playerScore === 5) {
        result.textContent = "You win the game! Choose option to play again"
        body.style = "background-color: #4fa883;"
        playerScore = 0;
        computerScore = 0;
        
    } else if (computerScore === 5){
        result.textContent = "You lose, Computer wins! Choose option to play again";
        body.style = "background-color: #d26161;"
        playerScore = 0;
        computerScore = 0;
    }

    

    userScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
}



// For every button in the node list
for (const btn of buttons) {
    
    btn.addEventListener('click', (event) => { // When it's clicked, check which class it contains
        body.style = "background-color: #c7c7c7;"
        computerSelection = getComputerChoice();

        if (btn.classList.contains("rock")) {
            result.textContent = playRound("rock", computerSelection); // and play a round, using that selection
            
        } else if (btn.classList.contains("paper")) {
            result.textContent = playRound("paper", computerSelection);

        } else if (btn.classList.contains("scissors")) {
            result.textContent = playRound("scissors", computerSelection);
        }

        updateScore();

    })
    
}











