const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const expressValidator = require('express-validator');
const passport = require('passport');

require('./config/passport')(passport);

const port = process.env.PORT || 9090;
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const config = require('./config/database');
const index = require('./routes/index');
const users = require('./routes/api/users');
const chatAPI = require('./routes/api/chat');

mongoose.connect(config.database);

// view engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));
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

app.use('/*', index);
app.use('/api/', users);
io.on('connection', chatAPI);

server.listen(port, () => console.log('Server is running on port', port));