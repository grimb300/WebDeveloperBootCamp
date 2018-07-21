// Connect to the database
 var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/cat_app", { useNewUrlParser: true });

// Create the database schema
var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

// Model the db pattern
var Cat = mongoose.model("Cat", catSchema);

//// Create a new cat
//var george = new Cat({
//    name: "Mrs. Norris",
//    age: 7,
//    temperament: "Evil"
//});
//
//// Save it to the db
//george.save(function(err, cat) {
//    if(err) {
//        console.log("SOMETHING WENT WRONG!!!");
//    } else {
//        console.log("WE JUST SAVED A CAT TO THE DB:");
//        console.log(cat);
//    }
//});

Cat.create({
    name: "Prescious",
    age: 15,
    temperament: "Jealous"
}, function(err, cat) {
    if(err) {
        console.log("SOMETHING WENT WRONG!!!");
    } else {
        console.log("WE JUST SAVED A CAT TO THE DB:");
        console.log(cat);

        // Nested the find inside the create to ensure that
        // the create finishes beefore find is executed
        Cat.find({}, function(err, cats) {
            if(err) {
                console.log("OH NO, ERROR!");
                console.log(err);
            } else {
                console.log("All the cats...");
                console.log(cats);
            }
        });
    }
});

