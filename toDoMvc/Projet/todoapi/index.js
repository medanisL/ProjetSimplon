
var express = require('express');
var app = express();

app.get('/', function (req, res) { 
  res.send('Hello World!');
});

var server = app.listen(3333, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

/*
var todos = ["2","3","7","6"];
app.get('/todos', function (req, res) { 
  res.send('liste des elements');
});

*/