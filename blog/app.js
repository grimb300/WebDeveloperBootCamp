// Standard setup stuff
var bodyParser = require("body-parser"),
    expressSanitizer = require("express-sanitizer");
    methodOverride = require("method-override"),
    mongoose = require("mongoose"),
    express = require("express"),
    app = express();

// App config
mongoose.connect("mongodb://localhost:27017/blog_app", { useNewUrlParser: true });
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.use(methodOverride("_method"));

// Mongoose config
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: { type: Date, default: Date.now }
});
var Blog = mongoose.model("Blog", blogSchema);

// Create a test blog entry
//Blog.create({
//    title: "Test Blog",
//    image: "https://upload.wikimedia.org/wikipedia/commons/4/43/Cute_dog.jpg",
//    body: "HELLO THIS IS A BLOG POST!"
//});

// RESTful Routes

// ROOT - redirect to INDEX
app.get("/", function(req, res) {
    res.redirect("/blogs");
});

// INDEX
app.get("/blogs", function(req, res) {
    Blog.find({}, function(err, blogs) {
        if(err) {
            res.redirect("/blogs");
        } else {
            res.render("index", { blogs: blogs });
        }
    });
});

// NEW
app.get("/blogs/new", function(req, res) {
    res.render("new");
});

// CREATE
app.post("/blogs", function(req, res) {
    // create the blog (sanitize it first)
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.create(req.body.blog, function(err, newBlog) {
        if(err) {
            // On error render the form again
            res.render("new");
        } else {
            // redirect to the SHOW page for this entry
            res.redirect("/blogs/"+newBlog._id);
        }
    });
});

// SHOW
app.get("/blogs/:id", function(req, res) {
    Blog.findById(req.params.id, function(err, foundBlog) {
        if(err) {
            res.redirect("/blogs");
        } else {
            res.render("show", { blog: foundBlog });
        }
    });
});

// EDIT
app.get("/blogs/:id/edit", function(req, res) {
    Blog.findById(req.params.id, function(err, foundBlog) {
        if(err) {
            res.redirect("/blogs");
        } else {
            res.render("edit", { blog: foundBlog });
        }
    });
});

// UPDATE
app.put("/blogs/:id", function(req, res) {
    // update the blog (sanitize it first)
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog) {
        if(err) {
            res.redirect("/blogs");
        } else {
            res.redirect("/blogs/"+updatedBlog._id);
        }
    });
});

// DESTROY
app.delete("/blogs/:id", function(req, res) {
    Blog.findByIdAndRemove(req.params.id, function(err) {
        if(err) {
            res.redirect("/blogs");
        } else {
            res.redirect("/blogs");
        }
    });
});

// Start the server
app.listen(3000, () => console.log('App listening on port 3000'));
