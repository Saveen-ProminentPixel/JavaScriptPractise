const startGameBtn = document.getElementById('start-game-btn');

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

let gameIsRunning = false;

const getPlayerChoice = () => {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, "").toUpperCase();
    if(selection !== ROCK && selection !== PAPER && selection !== SCISSORS){
        alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
        return DEFAULT_USER_CHOICE;
    }
    return selection;
};

const getComputerChoice = () => {
    const randomValue = Math.random();
    if(randomValue < 0.34){
        return ROCK;
    } else if(randomValue < 0.67){
        return PAPER;
    } else{
        return SCISSORS;
    }
};

const getWinner = (cChoice, pChoice) => {
    if(cChoice === pChoice){
        return RESULT_DRAW;
    } else if(cChoice === ROCK && pChoice === PAPER || cChoice === PAPER && pChoice === SCISSORS || cChoice === SCISSORS && pChoice === ROCK){
        return RESULT_PLAYER_WINS;
    } else{
        return RESULT_COMPUTER_WINS;
    }
}

// const start = function startGame(){
//     console.log("Game is Starting...");
// };

startGameBtn.addEventListener('click', () => {
    if(gameIsRunning){
        return;
    }
    gameIsRunning = true;
    console.log("Game is starting...");
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    // console.log(playerSelection);
    const winner = getWinner(computerChoice, playerChoice);
    let message = "";
    if(winner === RESULT_DRAW){
        message = `You picked ${playerChoice}, computer picked ${computerChoice}, it's a DRAW.`;
    } else if(winner == RESULT_PLAYER_WINS){
        message = `You picked ${playerChoice}, computer picked ${computerChoice}, YOU WON.`;
    } else{
        message = `You picked ${playerChoice}, computer picked ${computerChoice}, YOU LOST.`;
    }
    alert(message);
    gameIsRunning = false;
});