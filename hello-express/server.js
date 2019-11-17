//access the express module
var express = require('express');

//create an express app object
var app = express();

var port = 3000;

//listen to the port from the express app server
app.listen(port, function () {
    console.log('listening on port ' + port);
});

//define GET for the "/" endpoint
app.get('/', function (request, response) {
    response.send('Hello World! How are you?');
});

app.get('/test', function(request, response) {
    response.send('Hello there');
});
