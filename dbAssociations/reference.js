var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/blog_demo_2", { useNewUrlParser: true });

var Post = require("./models/post");
var User = require("./models/user");

// Create a new post
//Post.create({ title: "My favorite burger",
//              content: "Lorem Ipsum Burger..." },
//            function(err, newPost) {
//                if(err) {
//                    console.log(err);
//                } else {
//                    User.findOne({email: "bob@gmail.com"}, function(err, foundUser) {
//                        if(err) {
//                            console.log(err);
//                        } else {
//                            foundUser.posts.push(newPost);
//                            foundUser.save(function(err, updatedUser) {
//                                if(err) {
//                                    console.log(err);
//                                } else {
//                                    console.log(updatedUser);
//                                }
//                            });
//                        }
//                    });
//                }
//            });

// Find all posts by that user
User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user) {
    if(err) {
        console.log(err);
    } else {
        console.log(user);
    }
});
