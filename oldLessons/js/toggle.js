console.log("Success!!");

var button = document.querySelector("button");
console.log(button);
var body = document.querySelector("body");
console.log(body);
var purple = false;

button.addEventListener("click", function() {
	if (purple) {
		body.style.background = "white";
	} else {
		body.style.background = "purple";
	}

	purple = !purple;
});