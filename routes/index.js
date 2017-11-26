var express = require('express');
var Router = express.Router();

Router.get('/', function (req, res, next) {
  res.render("trangchu");
});

module.exports = Router;
