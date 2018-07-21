// Keep track of the player scores and max score
var score = [ 0, 0 ];
var maxScore = 5;
var maxReached = false;

// Connect the buttons to their events
var p1Button = document.querySelector("#p1Button");
p1Button.addEventListener("click", p1ScoreInc);
var p2Button = document.querySelector("#p2Button");
p2Button.addEventListener("click", p2ScoreInc);
var rstButton = document.querySelector("#rstButton");
rstButton.addEventListener("click", rstScore);
var updateMax = document.querySelector("#updateMax");
updateMax.addEventListener("change", changeMax);
updateMax.value = maxScore;

// Get handdles to the scoreboard
var p1SB = document.querySelector("#p1SB");
var p2SB = document.querySelector("#p2SB");
var maxSB = document.querySelector("#maxSB");

function changeMax() {
	maxScore = parseInt(updateMax.value);
	rstScore();
}

function incScore(player) {
	if (!maxReached) {
		if (++score[player] === maxScore) {
			maxReached = true;
		}
		updateSB();
	}
}

function p1ScoreInc() {
	incScore(0);
}

function p2ScoreInc() {
	incScore(1);
}

function rstScore () {
	score = [ 0, 0 ];
	maxReached = false;
	updateSB();
}

function updateSB () {
	p1SB.innerHTML = score[0];
	p2SB.innerHTML = score[1];
	if (maxReached) {
		if (score[0] === maxScore) {
			p1SB.style.color = "green";
		}
	if (score[1] === maxScore) {
			p2SB.style.color = "green";
		}
	} else {
		p1SB.style.color = "black";
		p2SB.style.color = "black";
	}
	maxSB.innerHTML = maxScore;
}