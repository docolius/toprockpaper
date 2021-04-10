console.log("this is my test")

// computerPlay
//     pick randomly from rock paper scissor
//     return that result
function computerPlay(){
    let options = ['ROCK', 'PAPER', 'SCISSORS']
    let choice = options[Math.floor(Math.random() * options.length)]
    // choice = choice.toUpperCase()
    // figured you'd get a chuckle out of the fact I almost put this in
    console.log('Computer picked ' + choice)
    return choice
}

// computerSelection
//     runs computerPlay, not sure why TOP seperates this?
//     return answer, 
//     I wonder if they intended for the return value to be returned inside the function to keep it cleaner?
//     DUMB!! the project was asking me to make this an argument for the round function!!

// playerSelection
//     offer dialog asking for rock paper scissor
//         be agnostic to case for spelling
//         return error for mispell or abberant choice
//     store answer
//     return answer
//     by default, this too is an argument moron, built it into playRound!!
//     NM, just change the name i guess?
function playerPlay(){
    let choice = prompt('Type either "Rock" "Paper" or "Scissors"', 'Nah, I like to lose')
    choice = choice.toUpperCase()
    if (choice == 'SCISSOR'){
        choice = 'SCISSORS'
    }
    if (choice == "ROCK" || choice == "PAPER"  || choice == "SCISSORS"){
        console.log('Player picked ' + choice)
        return choice
        // I should've kept the code in for review, but I had a hard time getting !== to work when attempting this in reverse.
        // this makes me wonder if the comparison was too strict without forcing type? but != didn't work either.
    } else {
        console.log("you either can't spell or can't read, this isn't your game")
    }
}

// playRound
//     runs computerSelection, you mean computerPlay idiot ROFL!
//     runs playerSelection, playerPlay
//     compares answers
//         paper beats rock
//         rock beats scissors
//         scissors beats paper
//     declares winner
function playRound(playerSelection, computerSelection){
    // computerSelection = computerPlay
    // playerSelection = playerPlay
    let pChoice = playerSelection() 
    let cChoice = computerSelection()
    // ^this is why everyone should have an arlen, thanks bro
    if ((pChoice == 'PAPER' && cChoice == 'ROCK') || (pChoice == 'ROCK' && cChoice == 'SCISSORS') || (pChoice == 'SCISSORS' && cChoice == 'PAPER')){
        console.log('Player Wins!!')
    } else if (pChoice === cChoice){
        console.log("It's a Tie")
    } else {
        console.log('Player Loses!!')
    }
    // if player is rock and pc is scissors, player wins
    // if ((playerSelection == 'PAPER' && computerSelection == 'ROCK') || (playerSelection == 'ROCK' && computerSelection == 'SCISSORS') || (playerSelection == 'SCISSORS' || playerSelection == 'SCISSOR' && computerSelection == 'PAPER'))
    //     {
    //     console.log('Player Wins!')
    //     }
    // // else if player and pc are the same, tie
    // else if ((playerSelection == 'ROCK' && computerSelection == 'ROCK') || (playerSelection == 'SCISSORS' || playerSelection == 'SCISSOR' && computerSelection == 'SCISSORS') || (playerSelection == 'PAPER' && computerSelection == 'PAPER'))
    //     {
    //         console.log("It's a Tie")
    //     } 
    // // else player loses
    // else 
    //     {
    //         console.log('The Computer Wins!')
    //     }
    }

// startMatch
//     hold playerWins
//     hold computerWins
//     loop through playRound for five wins
//     declare champion