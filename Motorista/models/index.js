var express = require('express');
var app = express();
var database = require("./modules/database");
var motoristasRouter = require('./routers/motoristas-router');
var motorista = require('./models/motorista');

app.use(express.static("public"));

app.listen(3336, function() {
    console.log("Servidor levantado");
})