let scoreHome = document.getElementById("score-home")
let scoreAway = document.getElementById("score-away")

let x = 0
let y = 0

function addToTeamScore(value, team) {
    if (team === "home") {
      x += value
      scoreHome.textContent = x
    } else {
      y += value
      scoreAway.textContent = y
    }
  }

function resetScore() {
    x = 0
    y = 0
    scoreHome.textContent = x
    scoreAway.textContent = y
}
