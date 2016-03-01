var express = require('express');
var app = express()
var path = require('path');
var port = process.env.PORT || 3000;

app.use(express.static('client'));

app.get('/', function(request, response) {
    response.sendFile('./client/index.html');
});

app.listen(port);
