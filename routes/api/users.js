const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const config = require('../../config/database');
const User = require('../../models/user');

// user sign up account.
router.post('/register', function (req, res, next) {
	// console.log(req.body);
	var errors = {};
  var name = req.body.name,
      email = req.body.email,
      password = req.body.password,
      password2 = req.body.password2;

	req.checkBody('name', 'Name field is required.').notEmpty();
  req.checkBody('email', 'Email field is required.').notEmpty();
  req.checkBody('email', 'Email not valid').isEmail();
  req.checkBody('password', 'Password field is required.').notEmpty();
  req.checkBody('password2', 'Confirm password field is required.').notEmpty();
  req.checkBody('password2', 'Password does not match.').equals(req.body.password);
	errors = req.validationErrors();
	
	if (errors) {
		res.json({ success: false, errors: errors });
        // console.log("error");
	} else {
    User.findOne({email: email}, function (err, result) {
      if (err) throw err;
      if (result) {
        return res.json({
          success: false,
          message: 'Email has already been taken.',
          name: name,
          email: email
        });
      } else {
        User.create({
          name: name,
          email: email,
          password: password
        })
        .then(function (user) {
          let token = jwt.sign({
            _id: user._id,
            name: user.name
          }, config.secret, { expiresIn: 1440 });
          console.log("created: ", user);
          
          return res.json({success: true, message: 'Sign up successfully', token: token});
        })
        .catch(function (err) {
          return next(err);
        })
      }
    });
	}


});

module.exports = router;
