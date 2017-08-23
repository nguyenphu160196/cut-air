var express = require('express');
var Router = express.Router();

Router.get('/', function (req, res, next) {
    res.render("trangchu");    
});

Router.get('/feature', function (req, res, next) {
    res.render("feature");    
});

module.exports = Router;
