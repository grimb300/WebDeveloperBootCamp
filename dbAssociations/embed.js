var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/blog_demo", { useNewUrlParser: true });

// POST - title, content
// Has to be defined first becuase it is used in userSchema
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});
var Post = mongoose.model("Post", postSchema);

// USER - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});
var User = mongoose.model("User", userSchema);

//var newUser = new User({
//    email: "charlie@brown.edu",
//    name: "Charlie Brown"
//});
//var newUser = new User({
//    email: "hermione@hogwarts.edu",
//    name: "Hermione Granger"
//});
//newUser.posts.push({
//    title: "How to brew polyjuice potion",
//    content: "Just kidding. Go to potions class to learn it!"
//});
//newUser.save(function(err, user) {
//    if(err) {
//        console.log(err);
//    } else {
//        console.log(user);
//    }
//});

//var newPost = new Post({
//    title: "Ode to a place kick",
//    content: "Lucy is going to let me kick it this time... ARGGGGH!"
//});
//newPost.save(function(err, post) {
//    if(err) {
//        console.log(err);
//    } else {
//        console.log(post);
//    }
//});

User.findOne({name: "Hermione Granger"}, function(err, foundUser) {
    if(err) {
        console.log(err);
    } else {
        foundUser.posts.push({
            title: "3 things I really hate",
            content: "Voldemort. Voldemort. Voldemort."
        });
        foundUser.save(function(err, user) {
            if(err) {
                console.log(err);
            } else {
                console.log(user);
            }
        });
    }
});
