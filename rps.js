
function getComputerChoice() {
    let x = parseInt(Math.random() * 3);
    let y = undefined;
    if (x===0) {
        y = "rock"
    }
    else if (x===1) {
        y = "paper"
    }
    else {
        y="scissors"
    }
    return y;
}

function playRound() {
    const playerSelection = prompt("Write your choice");
    const computerSelection = getComputerChoice();
    x = (playerSelection.toLowerCase()).trim();
    function result(num){
        if (num === 0) {return "lose"}
        if (num === 1) {return "win"}
        if (num === 2) {return "draw"}
    }
    function selection(){
        if (x === computerSelection) {
        return 2;
    }
        if (x==="rock") {
            if (computerSelection==="paper")
                return 0
            else if (computerSelection==="scissors")
                return 1
    }
        if (x==="scissors") {
            if (computerSelection==="paper")
               return 1;
            if (computerSelection==="rock")
                return 0;
    }
        if (x==="paper") {
             if (computerSelection==="rock")
                return 1;
            if (computerSelection==="scissors")
                return 0;
    }}

    console.log(result(selection()));
    return selection();
     }

     function playGame() {
        let playerscor = 0;
        let computerscor = 0;
        for (i=1; i<99; i++) {
            let round = playRound()
            if (round===1) {playerscor++}
            if (round===0) {computerscor++}
            if (playerscor > 2) {
                i=100;
                console.log("You have won the game");
                return 1;
            }
            if (computerscor > 2) {
                i=100;
               console.log("You have lost the game");
               return 2;
            }
        }
    }
     playGame();