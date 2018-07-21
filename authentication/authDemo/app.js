var express               = require('express'),
    mongoose              = require('mongoose'),
    passport              = require('passport'),
    bodyParser            = require('body-parser'),
    User                  = require('./models/user'),
    LocalStrategy         = require('passport-local'),
    passportLocalMongoose = require('passport-local-mongoose'),
    expressSession        = require('express-session');

mongoose.connect('mongodb://localhost:27017/auth_demo', { useNewUrlParser: true });

// app setup
var app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSession({
    secret: 'We dont need no stinking badges',
    resave: false,
    saveUninitialized: false
}));
// these use statments MUST come after the expressSession statement above
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// routes
// home
app.get('/', function(req, res) {
    res.render('home');
});
// secret (will require authentication to get here)
app.get('/secret', isLoggedIn, function(req, res) {
    res.render('secret');
});
// register routes
app.get('/register', function(req, res) {
    res.render('register');
});
app.post('/register', function(req, res) {
    User.register(new User({ username: req.body.username }), req.body.password, function(err, user) {
        if(err) {
            console.log(err);
            res.render('register');
        } else {
            passport.authenticate('local')(req, res, function() {
                res.redirect('/secret');
            });
        }
    });
});
// login routes
app.get('/login', function(req, res) {
    res.render('login');
});
app.post('/login', passport.authenticate('local', {
    successRedirect: '/secret',
    failureRedirect: '/login'
}), function(req, res) {
});
// logout route
app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

// middleware to check login status
function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

// start the server
app.listen(3000, () => console.log('App listening on port 3000'));
