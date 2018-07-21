var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

var friends = [ "Steve", "Jared", "Stacey", "Darin", "Tom" ];

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/friends", function(req, res) {
    res.render("friends", { list: friends });
});

app.post("/addfriend", function(req, res) {
    friends.push(req.body.newfriend);
    res.redirect("/friends");
});

app.listen(3000, () => console.log("App listening on port 3000"));
