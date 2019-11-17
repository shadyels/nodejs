var http = require('http');
var port = 3000;

//create a handle request
var requestHandler = function (request, response) {
    console.log('New requesto to: ' + request.url);
    response.end('Hello World');
};

//create a server
var server = http.createServer(requestHandler);

//make server listen to a port
server.listen(port, function () {
    console.log('Listening on port ' + port)
});


