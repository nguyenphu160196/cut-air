const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const expressValidator = require('express-validator');
const passport = require('passport');

const app = express();
const config = require('./config/database');
const index = require('./routes/index');
const users = require('./routes/api/users');

mongoose.connect(config.database);

// view engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
    let namespace = param.split('.')
    , root    = namespace.shift()
    , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));
require('./config/passport')(passport);

app.use('/', index);
app.use('/api/', users);

const server = require("http").Server(app);
server.listen(9090);
console.log('Server is running!!!');
