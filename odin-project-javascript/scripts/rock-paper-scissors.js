function computerChoice() {
    let choice = Math.floor(Math.random() * 3)
    return choice

}

function playerChoice() {
    var choice = prompt('Rock, Paper, or Scissors?');

    if(choice == 'Rock'){
        return 0
    }
    else if (choice == 'Paper') {
        return 1
    }
    else if (choice == 'Scissors'){
        return 2
    }
    else {
        return -1
    }

}

function playGame() {
    var gameChoices = ['Rock','Paper','Scissors']
    var cmpChoice = computerChoice()
    var plaChoice = playerChoice()
    let winner = 'Player'
    var gameScore = cmpChoice + plaChoice;


    if (cmpChoice == plaChoice){
        winner = "Tied";
    }
    else if (cmpChoice == 0){
        if (plaChoice == 2){
            winner = 'Computer';
        }
    }
    else if (cmpChoice == 1){
        if (plaChoice == 0){
            winner = 'Computer';
        }
    }
    else if (cmpChoice == 2){
        if (plaChoice == 1){
            winner = 'Computer';
        }

    }



    if (winner == 'Tied') {
        return ('Player chose: ' + gameChoices[plaChoice] + " Computer Chose: " + gameChoices[cmpChoice] + " and the game was: " + winner)

    }

    return ('Player chose: ' + gameChoices[plaChoice] + " Computer Chose: " + gameChoices[cmpChoice] + " The winner is: " + winner)
}

for (let i = 0; i < 1 ; i++) {
    let x = playGame()
    console.log(x)
}