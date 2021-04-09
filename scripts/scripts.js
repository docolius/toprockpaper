console.log("this is my test")

// computerPlay
//     pick randomly from rock paper scissor
//     return that result
function computerPlay(){
    let options = ['Rock', 'Paper', 'Scissors']
    let choice = options[Math.floor(Math.random() * options.length)]
    choice = choice.toUpperCase()
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
    if (choice == "ROCK" || choice == "PAPER"  || choice == "SCISSOR" || choice == "SCISSORS"){
        playing = true
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

// startMatch
//     hold playerWins
//     hold computerWins
//     loop through playRound for five wins
//     declare champion