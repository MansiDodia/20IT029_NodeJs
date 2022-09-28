var express = require('express');
var app = express();

app.get('/', function (req, res) {
   console.log("Get Request Method")
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at %s port", port)
})