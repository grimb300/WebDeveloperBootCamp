var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, rsp) {
    rsp.render("home");
});

app.listen(3000, () => console.log("App listening on port 3000"));
