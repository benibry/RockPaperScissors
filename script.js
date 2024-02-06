// // Function to get player's choice
function getPlayerChoice() {
    let choice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
    while (!['rock', 'paper', 'scissors'].includes(choice)) {
      choice = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
    }
    return choice;
  }
  
  // Function to get computer's choice
  function computerSelection() {
    const cpuSelection = ['rock', 'paper', 'scissors'];
    return cpuSelection[Math.floor(Math.random() * cpuSelection.length)];
  }
  
  // Function to determine the winner of a single round
  function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return "It's a tie!";
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      return "You win!";
    } else {
      return "Computer wins!";
    }
  }
  
  // Function to play 5 rounds
  function playGame() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 0; i < 5; i++) {
      const playerChoice = getPlayerChoice();
      const computerChoice = getComputerChoice();
      console.log(`Round ${i + 1}: You chose ${playerChoice}, Computer chose ${computerChoice}.`);
      const result = determineWinner(playerChoice, computerChoice);
      console.log(result);
  
      if (result === "You win!") {
        playerScore++;
      } else if (result === "Computer wins!") {
        computerScore++;
      }
    }
  
    console.log(`Final Score: You ${playerScore} - Computer ${computerScore}`);
  }
  
  // Start the game
  playGame();