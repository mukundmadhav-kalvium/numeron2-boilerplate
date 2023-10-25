// Iteration 8: Making scoreboard functional


let scoreBoard = document.getElementById("score-board")
let params = new URLSearchParams(window.location.search);
let score = params.get("score")
console.log("score: ",score);
scoreBoard.textContent = score;

let playAgainBtn = document.getElementById("play-again-button")
playAgainBtn.onclick=()=>{
    window.location.href = "./game.html";
}