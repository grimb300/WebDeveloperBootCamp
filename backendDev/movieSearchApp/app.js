// My key is &apikey=ae10b35e

// Set up the server
var express = require('express');
var app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

// Set up request
var request = require('request');

// Set up the routes
app.get('/', function(req, res) {
    res.render('home');
});

app.get('/results', function(req, res) {
    var reqPage = req.query.page ? Number(req.query.page) : 1;
    var prevPage = reqPage - 1;
    var nextPage = reqPage + 1;
    var searchString = req.query.searchString;
    var reqURL = 'http://www.omdbapi.com/?s='+searchString+'&page='+reqPage+'&apikey=ae10b35e';
    request(reqURL, function(error, response, body) {
        if(error) {
            res.send('Bad request: '+reqURL);
        } else {
            if(response.statusCode === 200) {
                var searchResults = JSON.parse(body);

                res.render('results', { searchString: searchString,
                                        results:      searchResults,
                                        page:         reqPage,
                                        prevPage:     prevPage,
                                        nextPage:     nextPage });
                //res.send(body);

            } else {
                res.send('Unsuccessful status: '+response.statusCode);
            }
        }
    });

});

// Start the server
app.listen(3000, () => console.log('App listening on port 3000'));
