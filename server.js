// Load the http module to create an http server.
var http = require('http'),
    fs = require('fs');

// Read commandline arguments and setup variables
var port = parseInt(process.argv[2]) || 9999,
    filename = process.argv[3] || 'untitled';

// Configure HTTP server
var server = http.createServer(function(request, response) {

    console.log('Request received');

    var responseData = '';

    request.on('data', function(data) {
        responseData += data;
    });

    request.on('end', function() {
        var resultObject = JSON.parse(responseData);

        fs.appendFile(filename, resultObject.data + '\n\n', function (err) {

            var headers = {
                'Content-Type': 'text/plain; charset=utf-8',
                'Access-Control-Allow-Origin': '*'
            };

            if(err) {
                response.writeHead(500, headers);
            } else {
                response.writeHead(200, headers);
            }

            response.end();

        });
    });

});

// Listen on localhost, default port is 9999 if no argument available
server.listen(port);

// Put a friendly message on the terminal
console.log('Server running at: http://localhost:' + port + '/');
console.log('Saving to file:', filename);