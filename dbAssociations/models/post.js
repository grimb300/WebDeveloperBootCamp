var mongoose = require("mongoose");

// POST - title, content
// Has to be defined first becuase it is used in userSchema
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});
module.exports = mongoose.model("Post", postSchema);
