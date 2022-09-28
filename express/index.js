var express = require('express');
var app = express();

app.get('/', function (req, res) {
   console.log("Get Request Method");
   res.send("Hello Get");
})

app.post('/', function (req, res) {
    console.log("Post Request Method");
    res.send("Hello Post");
 })

 app.delete('/del_user', function (req, res) {
    console.log("Delete Request Method");
    res.send("Hello Delete");
 })

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at %s port", port)
})