var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(express.static('public'));
app.use(bodyParser.json()); //peticiones json
app.use(bodyParser.urlencoded({extended: true})); //peticiones
app.set("view engine", "jade");



app.get("/", function(req, res){

    res.render("index");
});
app.post("/messege", function(req, res){
    res.send("Datos recibidos")
});

app.post("/contact", function(req, res){
    res.render("contact");
    console.log("Nombre:"  + req.body.nombre);
    console.log("email:"   + req.body.email);
    console.log("Mensaje:" + req.body.mensaje);
});



app.get("/news", function(req, res){
    res.render("news");
});


app.listen(5000);

