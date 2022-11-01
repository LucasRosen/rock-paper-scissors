let playerScore = 0;
let computerScore = 0;
let playerSelection;
const items = ["rock", "paper", "scissors"];


function getComputerChoice() {
    let randItem = items[Math.floor(Math.random() * items.length)];
    
    return randItem;
}

function playRound(playerSelection, computerSelection) {
    console.log("You picked " + playerSelection);
    console.log("Opponent picked " + computerSelection);

    if (playerSelection == computerSelection) {
        // Tie
        resultsText.textContent = "Tie!";
    } else if (playerSelection == "rock" && computerSelection == "scissors" || 
        playerSelection == "paper" && computerSelection == "rock" ||
        playerSelection == "scissors" && computerSelection == "paper") { // Check all player win scenarios
        // Player wins
        resultsText.textContent = "You win!";
        playerScore += 1;
        playerScoreDisplay.textContent = playerScore;

        calcScore();
    } else {
        // Computer wins
        resultsText.textContent = "You lose!";
        computerScore += 1;
        computerScoreDisplay.textContent = computerScore;

        calcScore();
    }

    console.log("--------------------------");
}

function calcScore() {
    if (playerScore == 5 || computerScore == 5) {
        // End game
        if (playerScore > computerScore) {
            // Player won
            resultsText.textContent = "You won the game!";
        } else {
            // Computer won
            resultsText.textContent = "You lost the game :(";
        }
    }
}


const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");


const statusContainer = document.createElement("div");
statusContainer.classList.add("status-container")
document.body.insertBefore(statusContainer, document.querySelector("#btn-container"));


const resultsText = document.createElement("p");
resultsText.textContent = "Click To Select";

statusContainer.appendChild(resultsText);


const buttons = document.querySelectorAll("#btn-container > button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.classList.value, getComputerChoice());
    });
});