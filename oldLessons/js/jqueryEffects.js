$("button").on("click", function(){
	if ($(this).text() === "Show") {
		if (Math.floor(Math.random() * 2) === 0) {
			$("div.box").fadeIn("1000");
		} else {
			$("div.box").slideDown("1000");
		}
	} else if ($(this).text() === "Hide") {
		if (Math.floor(Math.random() * 2) === 0) {
			$("div.box").fadeOut("1000");
		} else {
			$("div.box").slideUp("1000");
		}
	} else if ($(this).text() === "Toggle") {
		if (Math.floor(Math.random() * 2) === 0) {
			$("div.box").fadeToggle("1000");
		} else {
			$("div.box").slideToggle("1000");
		}
	}
});