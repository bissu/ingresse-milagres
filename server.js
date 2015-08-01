var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();

app.set('port', process.env.PORT || 80);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(express.static(__dirname + '/app/', { maxAge: 0 }));

app.get('photos/*', function (req, res) {
    var files = fs.readdirSync('photos')
    res.send(files);
});

app.get('/*', function (req, res) {
  res.sendfile(__dirname + '/app/index.html');
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.send(500, { message: err.message });
});

app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
