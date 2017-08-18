var express = require("express");
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

var config = require('./config/config');
var index = require('./routes/index');

// mongoose.connect(config.dbUrl);

// view engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

var server = require("http").Server(app);
server.listen(9090);
console.log('Server is running!!!');
