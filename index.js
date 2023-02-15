let scoreHome = document.getElementById("score-home")
let scoreAway = document.getElementById("score-away")

let x = 0
let y = 0

function calcScore (addToScore, score, scoreboardElement) {
    scoreboardElement.textContent = score  
}

function resetScore() {
    x = 0
    y = 0
    scoreHome.textContent = x
    scoreAway.textContent = y
}
