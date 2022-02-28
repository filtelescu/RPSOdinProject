
let playerSelection = ''
let computerSelection = computerPlay()
let whoWon = ''


// creating a function to randomly pick the computers move

function computerPlay() {

    // pick a number between 1 and 3 and store in variable
    const computersChoice = Math.floor(Math.random() * 3)
    
    // instructions say to return a string, so convert # to RPS
    if (computersChoice === 0) {
        return 'rock'
    } else if (computersChoice === 1) {
        return 'paper'
    } else {
        return 'scissors'
    }

}


// writing a function that plays a round and determines winner

function playRound(playerSelection, computerSelection) {

    // to lowercase so we don't need to worry about input case 
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "it's a tie!"
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        whoWon = 'computer'
        return `You lose, ${computerSelection} beats ${playerSelection}`
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        whoWon = 'player'
        return `You win!, ${playerSelection} beats ${computerSelection}`
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        whoWon = 'player'
        return `You win!, ${playerSelection} beats ${computerSelection}`
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        whoWon = 'computer'
        return `You lose, ${computerSelection} beats ${playerSelection}`
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        whoWon = 'player'
        return `You win!, ${playerSelection} beats ${computerSelection}`
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        whoWon = 'computer'
        return `You lose, ${computerSelection} beats ${playerSelection}`
    }

}


// creating a function that plays 5 rounds and keeps score/reports winner
function game() {

    // setting base scores
    let playerScore = 0
    let computerScore = 0

    for (let i = 0; i < 5; i++) {
        // put playerSelection at the start so that it is 5 proper rounds 
        playerSelection = window.prompt("rock, paper, or scissors?", 'rock')
        console.log(playRound(playerSelection, computerSelection))
        
        if (whoWon === 'player') {
            playerScore += 1
        } else if (whoWon === 'computer') {
            computerScore += 1
        } 
        // NOTE: !!!this line is what gets us new values for computer!!! 
        computerSelection = computerPlay()
    }

    if (playerScore === computerScore) {
        return 'it was a tie'
    } else if (playerScore > computerScore) {
        return 'player won!'
    } else {
        return 'computer won'
    }

}


console.log(game())