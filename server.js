var http = require('http');
var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write ('<!DOCTYPE html>'+
    '<html>'+
      '<head>'+
          '<meta charset="utf-8" />'+
          '<title>This is the Nodejs-Example.</title>'+
      '</head>'+
      '<body>'+
          '<p>Hello world!</p>'+
      '</body>'+
    '</html>');
  res.end(' - end - \n');
});
server.listen(3000);
console.log('Server running at http://127.0.0.1:3000/');
