var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/fallinlovewith/:thing", function(req, res) {
    var thing = req.params.thing;
    res.render("love", { thingVar: thing });
});

app.get("/posts", function(req, res) {
    var posts = [
        { title: "Post 1", author: "Susy" },
        { title: "My adorable pet bunny", author: "Charlie" },
        { title: "Can you believe this pomsky?", author: "Bob" }
    ];
    res.render("posts", { posts: posts });
});

app.get("*", function(req, res) {
    res.send("Unknown page!");
});
app.listen(3000, () => console.log("App listening on port 3000"));
