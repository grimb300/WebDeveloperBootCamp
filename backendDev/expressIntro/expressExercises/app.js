var express = require("express");
var app = express();
var sounds = {
    pig : "Oink",
    cow : "Moo",
    dog : "Woof",
    rooster : "Cock-a-doodle-doo",
    cat : "Meow"
};

app.get("/", function(req, res) {
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res) {
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];
    res.send("The "+animal+" says \'"+sound+"\'!");
});

app.get("/repeat/:num/:phrase", function(req, res) {
    var response = "";
    var times = req.params.num;
    while(times > 0) {
        response += req.params.phrase + " ";
        times--;
    }
    res.send(response);
});

app.get("*", function(req, res) {
    res.send("Sorry, page not found... What are you doing with your life?");
});

app.listen(3000, () => console.log("App listening on port 3000"));
