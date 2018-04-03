var express = require('express');
var app = express();
app.get('/', function(req,res){
    res.end("Exemplo de app simples usando express");
});

var port = 3456;
app.listen(port, function(){
    console.log("Listen on port: "+port);
});