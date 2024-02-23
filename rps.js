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

const roundChoice1 = document.querySelector("p.roundchoice1");

function playRound() {
    const playerSelection = roundChoice1.textContent;
    x = (playerSelection.toLowerCase()).trim();
    const computerSelection = getComputerChoice();
    const compChoice = document.querySelector("p.computerChoice");
    compChoice.textContent = `Computer have chosen ${computerSelection}.`
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

    return selection();
     }


let playerscor = 0;
let computerscor = 0;
    function playGame() {
            if (playerscor === 5 ) {
                endresult.textContent += "You have won the game !" ;
            }
            if (computerscor === 5) {
               endresult.textContent += "You have lost the game !";
            }
            if (playerscor > 5 || computerscor > 5) {
                endresult.textContent += "\nPlease reset the game if you want to play again."
            }
        }

const playerChoicePaper = document.querySelector("#paper");
const playerChoiceScissors = document.querySelector("#scissors");
const playerChoiceRock = document.querySelector("#rock");
const roundchoice = document.querySelector("p.roundchoice");
const roundChoiceText = document.querySelector("p.roundchoice");
const endresult = document.querySelector("div.endresult");
const buttons = document.querySelectorAll("div.buttons, button");
const resetbut = document.querySelector("#reset");
const roundresults = document.querySelector("div.roundresults");


    resetbut.addEventListener("click", () => {
        playerscor = 0;
        computerscor = 0;
        roundresults.textContent = "";
        endresult.textContent ="";
    });

    playerChoicePaper.addEventListener("click", () => 
    {roundChoice1.textContent = "Paper";
    roundchoice.textContent = "You have chosen paper";
    const content = document.createElement("div");
    content.classList.add("content");
    let roundresult = playRound();
    let result1 = result(roundresult);
    content.textContent = `You ${result1} this round !`;
    roundresults.appendChild(content);
    if (roundresult===1) {playerscor++}
    if (roundresult===0) {computerscor++}
        playGame();
    });

    playerChoiceRock.addEventListener("click", () =>
    {roundChoice1.textContent = "Rock";
    roundchoice.textContent = "You have chosen rock.";
    const content = document.createElement("div");
        content.classList.add("content");
        let roundresult = playRound();
        let result1 = result(roundresult);
        content.textContent = `You ${result1} this round !`;
        roundresults.appendChild(content);
        if (roundresult===1) {playerscor++}
        if (roundresult===0) {computerscor++}
        playGame();
    });

    playerChoiceScissors.addEventListener("click", () => 
    {roundChoice1.textContent = "Scissors";
    roundchoice.textContent = "You have chosen scissors.";
    const content = document.createElement("div");
    content.classList.add("content");
    let roundresult = playRound();
    let result1 = result(roundresult);
    content.textContent = `You ${result1} this round !`;
    roundresults.appendChild(content);
    if (roundresult===1) {playerscor++}
    if (roundresult===0) {computerscor++}
        playGame();
    });

    function result(num){
        if (num === 0) {return "lose"}
        if (num === 1) {return "win"}
        if (num === 2) {return "are draw"}
    }

