var http = require('http');
var finalhandler = require('finalhandler');
var serveStatic = require('serve-static');

var serve = serveStatic("./");

var server = http.createServer(function(req, res) {
  var done = finalhandler(req, res);
  serve(req, res, done);
  console.log(req._parsedUrl.path);
});

var port = 11753;
server.listen(port);
console.log('Serving ' + __dirname + ' on port ' + port +'.');