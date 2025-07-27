let computerScore = 0;
let humanScore = 0;

function getComputerChoice () {
    let random = Math.floor(Math.random() * 3);
    if (random === 0) {
        return "rock"
    }
    else if (random === 1) {
        return "paper"
    }
    else {
        return "scissor"
    }
}

function getHumanChoice () {
    let choice = prompt("Rock ,Paper or Scissors?")
    return choice
}

function playRound (getHumanChoice, getComputerChoice) {
    
}

console.log(getComputerChoice());
console.log(getHumanChoice());