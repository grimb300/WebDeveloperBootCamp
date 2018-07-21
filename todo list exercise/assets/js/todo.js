// Cross off a todo when it is clicked
// Add click listener to the ul so it will work for new li's added later
$("ul").on("click", "li", function() {
	$(this).toggleClass("done");
});

// If delete is clicked, remove the todo after fade out
// Add click listener to the ul so it will work for new li's added later
$("ul").on("click", "li span", function(event) {
	$(this).parent().fadeOut(1000, function() {
		$(this).remove();
	});
	event.stopPropagation();
})

// If enter is pressed in the text input, add new todo
$("input[type='text']").on("keypress", function(event) {
	if (event.which === 13) {
		// Grab text, and clear the input box
		var newTodo = $(this).val();
		$(this).val("");
		// Append the todo as a new li in the ul
		$("ul").append("<li><span><i class=\"fas fa-trash-alt\"></i></span> "+newTodo+"</li>");
	}
});

// Clicking the plus hides/shows the todo input
$(".fa-plus").on("click", function() {
	$("input[type='text']").fadeToggle(400);
});