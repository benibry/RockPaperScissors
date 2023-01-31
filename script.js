let pScore = 0
let cScore = 0




const computerPlay = () => {
    const arrOfChoices = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * 3);
    return arrOfChoices[randomNum];

}

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'Its a tie!!! both picked rockss'
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'Its a Tie!!! Both picked scissors'
    }
    else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'Its a Tie!!! Both picked Paper'
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        cScore++;
        return 'You Lose!!! Rock beats Scissors'
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        pScore++;
        return 'You Win, Scissors cuts paper!!!'
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        pScore++;
        return 'You Win Paper beats rock!!!'
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        cScore++;
        return 'You Lose Scissors Cuts Paper!!!'
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        pScore++;
        return 'You Win!!! rock beats scissors'
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        cScore++;
        return 'You Lose Paper beats Rock!!!'
    }

}


const game = () => {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Choose your weapon, Rock, Paper or Scissors', 'rock , paper , scissors').toLowerCase();
        const computerSelection = computerPlay()
        console.log(playRound(playerSelection, computerSelection))

    }

    if (pScore > cScore) {
        window.alert ('You win big lad')
    } else if (pScore < cScore) {
        window.alert ('You lost this time man')
    } else {
        window.alert ('You tied with the computer!!!')
    }
}


console.log(game());





