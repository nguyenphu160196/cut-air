var express = require("express");
var app = express();
var mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost:27017/tlcn_db');
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");

var server = require("http").Server(app);
server.listen(8080);
console.log('Server is running bitch!!!');

app.get("/", function(req, res){
	res.render("trangchu");
})
