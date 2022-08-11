// let homeScore= document.getElementById("home-score")
// let awayScore= document.getElementById("away-score")
// let points = 0
let homeScore = 0
let homeBtnOne = document.getElementById("home-score-btn-1")
let homeScoreDis = document.getElementById("home-score") 


function plusOneHome() {
       homeScore += 1
       homeScoreDis.textContent = homeScore
}

function plusTwoHome() {
    homeScore += 2
    homeScoreDis.textContent = homeScore
}

function plusThreeHome() {
    homeScore += 3
    homeScoreDis.textContent = homeScore
}


let awayScore = 0
let AwayBtnTwo = document.getElementById("away-score-btn")
let awayScoreDis = document.getElementById("away-score")


function plusOneAway() {
    awayScore += 1
    awayScoreDis.textContent = awayScore
}

function plusTwoAway() {
    awayScore += 2
    awayScoreDis.textContent = awayScore
}
function plusThreeAway() {
    awayScore += 3
    awayScoreDis.textContent = awayScore
}

function clearScore() {
    homeScore = 0
    awayScore = 0
}