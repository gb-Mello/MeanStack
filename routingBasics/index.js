var routes = require('./routes');
var express = require('express');
var app = express();

app.get('/', function(req,res){
    res.end("Bem vindooooo");
});

app.get('/testRoute', function(req, res){
    res.end("retornando informaçao");
});

app.get("/fruits", routes.fruits);
app.get("/veg", routes.veg);
app.get("/dairy", routes.dairy);
app.get("/meats", routes.meats);
app.get("/grains", routes.grains);

app.get('*', function(req, res){
    res.end("Nao ENCONTRADO, ERROOOOOOOOU");
});

var port = 3456;
app.listen(port, function(){
    console.log("Aplicativo funcionando na porta: "+ port);
});

