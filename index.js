let scoreHome = document.getElementById("score-home")
let scoreAway = document.getElementById("score-away")

let score1 = 0
let score2 = 0

function plusOneHome() {
    score1 += 1
    scoreHome.innerText = score1
}

function plusTwoHome() {
    score1 += 2
    scoreHome.innerText = score1   
}

function plusThreeHome() {
    score1 += 3
    scoreHome.innerText = score1   
}

function plusOneAway() {
    score2 += 1
    scoreAway.innerText = score2   
}

function plusTwoAway() {
    score2 += 2
    scoreAway.innerText = score2   
}

function plusThreeAway() {
    score2 += 3
    scoreAway.innerText = score2   
}

function resetScore() {
    score1 = 0
    score2 = 0
    scoreHome.textContent = score1
    scoreAway.textContent = score2
    
}
