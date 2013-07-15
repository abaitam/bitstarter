var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

function readindex (){
   var index = fs.readFileSync('index.html');
   return index.toString();
}

app.get('/', function(request, response) {
  response.send(readindex());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
