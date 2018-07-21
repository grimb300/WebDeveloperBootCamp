var defBackgroundColor = "#232323";

// Get a handle to the squares and add click listeners
var squares = document.querySelectorAll(".square");
for (var i=0; i<squares.length; i++) {
	squares[i].addEventListener("click", function() {
		// Grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		console.log("clicked color "+clickedColor);
		if (clickedColor === pickedColor) {
			message.textContent = "CORRECT!!!";
			winDisplay(clickedColor);
		} else {
			this.style.backgroundColor = defBackgroundColor;
			message.textContent = "Try Again";
		}
	});
}

// Handles to various parts of the header and buttons
var h1 = document.querySelector("h1");
var colorDisplay = document.getElementById("colorDisplay");
var resetButton = document.querySelector("#reset");
var message = document.getElementById("message");
var modeButtons = document.querySelectorAll(".mode");

// Create the colors list and pick one to be the goal
var numColors = 6;
var colors = Array(numColors).fill("");
var pickedColor = "";
resetGame();


// Connect appropriate event listeners
resetButton.addEventListener("click", resetGame);
for (var i=0; i<modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function() {
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		if (this.textContent === "Easy") {
			numColors = 3;
		} else if (this.textContent === "Hard") {
			numColors = 6;
		}
		resetGame();
	});
}
// easyButton.addEventListener("click", function() {
// 	easyButton.classList.add("selected");
// 	hardButton.classList.remove("selected");
// 	numColors = 3;
// 	squares[3].style.display = "none";
// 	squares[4].style.display = "none";
// 	squares[5].style.display = "none";
// 	resetGame();
// });
// hardButton.addEventListener("click", function() {
// 	hardButton.classList.add("selected");
// 	easyButton.classList.remove("selected");
// 	numColors = 6;
// 	squares[3].style.display = "block";
// 	squares[4].style.display = "block";
// 	squares[5].style.display = "block";
// 	resetGame();
// });

function resetGame() {
	// Generate new colors array and pick a new color
	colors = genRandColors(numColors);
	pickedColor = pickColor();
	drawSquares();
	message.textContent = "";
	h1.style.backgroundColor = "steelblue";
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";

}

function drawSquares() {
	for (var i=0; i<squares.length; i++) {
		// Check if it should be displayed
		if (i < numColors) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			// Else, hide it
			squares[i].style.display = "none";
		}
	}
}

function winDisplay(color) {
	for (var i=0;i < numColors; i++) {
		squares[i].style.backgroundColor = color;
	}
	h1.style.backgroundColor = color;
	resetButton.textContent = "Play Again?";
}

function pickColor() {
	// Pick a random color from the colors array
	return colors[Math.floor(Math.random() * numColors)];
}

function genRandColors(num) {
	// Randomly create "num" colors
	var retColors = [];
	for (var i=0; i<num; i++) {
		retColors.push(randColor());
	}

	return retColors;
}

function randColor() {
	// Generate a random rgb(???, ???, ???) color
	var redVal   = Math.floor(Math.random() * 256);
	var greenVal = Math.floor(Math.random() * 256);
	var blueVal  = Math.floor(Math.random() * 256);

	var retColor = "rgb("+redVal+", "+greenVal+", "+blueVal+")";
	console.log("created color "+retColor);

	return retColor;
}