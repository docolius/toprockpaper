console.log("this is my test")

let pWins = 0
let cWins = 0
let noWins = 0
let keepPlaying = true

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
    let round = null
    let pChoice = playerSelection() 
    let cChoice = computerSelection()
    // ^this is why everyone should have an arlen, thanks bro
    if ((pChoice == 'PAPER' && cChoice == 'ROCK') || (pChoice == 'ROCK' && cChoice == 'SCISSORS') || (pChoice == 'SCISSORS' && cChoice == 'PAPER')){
        console.log('Player Wins!!')
        round = 'player'
        return round
    } else if (pChoice === cChoice){
        console.log("It's a Tie")
        round = 'tie'
        return round
    } else {
        console.log('Player Loses!!')
        round = 'computer'
        return round
    }
}

// startMatch
//     add win/loss counters to the playRound returns
//     hold playerWins
//     hold computerWins
//     loop through playRound for five wins
//     declare champion
//     reset counters

function resetGame() {
    if (keepPlaying == false){
        pWins = 0
        cWins = 0
        noWins = 0
        keepPlaying = true
    }
}

function logScore(){
    console.log('player: ' + pWins + ' computer: ' + cWins + ' ties: ' + noWins)
}

function startMatch(){
    while (keepPlaying = true){
        if (pWins >= 5){
            keepPlaying = false
            console.log("%cThe Game Has Finished! Player Won", "color:blue; font-size: 20px")
            resetGame()
            return 'score reset, play again?'
        } else {keepPlaying = true} 
        if (cWins >= 5){
            keepPlaying = false
            console.log("%cThe Game Has Finished! Computer Won", "color:red; font-size: 20px")
            resetGame()
            return 'score reset, play again?'
        } else {keepPlaying = true} 
        let game = playRound(playerPlay, computerPlay)
        if (game == 'player'){
            pWins ++
            logScore()
        } else if (game == 'computer'){
            cWins ++
            logScore()
        } else {
            noWins ++
            logScore()
        }
    }
}
