window.setTimeout(function() {
	// The Todo List
	var todos = ["get up", "shit", "shower", "shave", "eat breakfast", "brush teeth", "go to work"];

	// Loop forever (or until "quit" command)
	var quit = false;
	while (!quit) {
		// Get the command
		var input = prompt("What would you like to do?");

		// Do action based on command
		if (input === "new") {
			// Create new todo
			var newTodo = prompt("What do you want to add to the Todo List");
			todos.push(newTodo);
			console.log(newTodo+" added to the list")
		} else if (input === "list") {
			// Print out the list, one line per item
			console.log("****************");
			todos.forEach(function(todo,num,arr) {
				console.log(num+": "+todo);
			});
			console.log("****************");
		} else if (input === "delete") {
			var deleteNum = prompt("What todo do you wish to delete?");
			var deletedTodo = todos.splice(deleteNum,1);
			console.log("Deleted: "+deletedTodo[0]);
		} else if (input === "quit") {
			// Quit the app
			console.log("It has been nice serving you")
			quit = true;
		} else {
			// Print nice message requesting the user to read the fucking manual
			console.log("Bad input! RTFM!!!!")
		}
	}
}, 500);