let playerSelection;
const items = ["rock", "paper", "scissors"];


function getComputerChoice() {
    let randItem = items[Math.floor(Math.random() * items.length)];
    
    return randItem;
}

function playRound(playerSelection, computerSelection) {
    console.log("You picked " + playerSelection)
    console.log("Opponent picked " + computerSelection)

    if (playerSelection == computerSelection) {
        // Tie
        console.log("Tie!")
    } else if (playerSelection == "rock" && computerSelection == "scissors" || 
        playerSelection == "paper" && computerSelection == "rock" ||
        playerSelection == "scissors" && computerSelection == "paper") { // Check all player win scenarios
        // Player wins
        console.log("You win!" + playerSelection + " beats " + computerSelection)
    } else {
        // Computer wins
        console.log("You lose!" + computerSelection + " beats " + playerSelection)
    }

    console.log("--------------------------")
}