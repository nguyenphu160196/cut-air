const express = require("express");
var fs = require('fs');
const https = require('https');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const expressValidator = require('express-validator');
const passport = require('passport');
const history = require('connect-history-api-fallback')

require('./config/passport')(passport);

const port = process.env.PORT || 9090;
const app = express();


var options = {
  key: fs.readFileSync('./config/file.pem'),
  cert: fs.readFileSync('./config/file.crt')
};
var server = https.createServer(options, app);

var io = require('socket.io')(server);

var ExpressPeerServer = require('peer').ExpressPeerServer; 
var peerjs_options = {
  debug: true
}

var peerServer = ExpressPeerServer(server, peerjs_options)
app.use('/peerjs', peerServer);

const config = require('./config/database');
const index = require('./routes/index');
const users = require('./routes/api/users');
const chatAPI = require('./routes/api/chat');

mongoose.connect(config.database);

// view engine
app.set("view engine", "ejs");
app.set("views", "./views");

console.log("1", path.join(__dirname, '/build'));
app.use(express.static(path.join(__dirname, '/build')));
app.use(history({
  index: '/'
}));
app.use(express.static(path.join(__dirname, '/build')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
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

app.use('/', index);
app.use('/api/', users);
io.on('connection', chatAPI);

server.listen(port, () => console.log('Server is running on port ' + port));
