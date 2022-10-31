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
    } else {
        // Computer wins
        resultsText.textContent = "You lose!";
    }

    console.log("--------------------------");
}


const statusContainer = document.createElement("div");
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