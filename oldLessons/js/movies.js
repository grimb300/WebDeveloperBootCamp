// Create the movies array
var movies = [];

// Add the movies into it
movies.push({
	title: "In Bruges",
    rating: 5,
    hasSeen: true
});
movies.push({
	title: "Frozen",
    rating: 4.5,
    hasSeen: false
});
movies.push({
	title: "Mad Max Fury Road",
    rating: 5,
    hasSeen: true
});
movies.push({
	title: "Les Miserables",
    rating: 3.5,
    hasSeen: false
});

movies.forEach(function (film) {
	console.log("You have "+(film.hasSeen ? "" : "not ")+"seen \""+film.title+"\" - "+film.rating+" stars");
});