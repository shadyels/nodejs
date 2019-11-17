var express = require('express');
var port = 3000;
var app = express();

//use body parser to access and parse body in post or put requests
//this is very important if you're passing data instead of just using GET requests
var bodyParser = require('body-parser');

// this reads Body in xxx-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// this reads Body from a JSON
app.use(bodyParser.json);

var quotes = [
    {
        id: 1,
        quote: "The best is yet to come",
        author: "Unknown",
        year: 2000
    },
    {
        id: 2,
        quote: "This is a quote",
        author: "First Last",
        year: 1930
    },
    {
        id: 3,
        quote: "This is another quote",
        author: "First2 Last2",
        year: 1910
    }
];

app.listen(port, function () {
    console.log('Listening on port ' + port);
});

app.get('/', function (req, res) {
    res.send('Get request received at \"/\"');
});

app.get('/quotes', function (req, res) {
    if(req.query.year){
        res.send(" Return a list of quotes from the year: " + req.query.year); //query, filter the list
    } else {
        console.log('Returning a list of all quotes...');
        res.json(quotes);
    }
});

//params creates a new endpoing
app.get('/quotes/:id', function (req, res) {
    console.log('returning quotes with ID = ' + req.params.id);
    res.send('Returning quotes with ID = ' + req.params.id);
});

app.post('/quotes', function(req, res){
    console.log("Insert a new quote: " + req.body.quote);
    res.json(req.body);
});

app.delete('/quotes/:id', function (req, res) {
    console.log('deleting Quote ' + req.params.id);
    req.send('Deleted quote ' + req.params.id);
});