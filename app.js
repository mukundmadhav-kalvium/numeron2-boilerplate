// Iteration 1: Making the play button in the index.html functional.
// Description: When the play button is clicked the game.html page should be opened

var pButn = document.getElementById("play-button")

pButn.onclick=()=>{
    window.location.href="./game.html"
}