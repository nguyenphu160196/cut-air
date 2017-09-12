const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const config = require('./database');

module.exports = function(passport) {
	let opts = {};
	opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('JWT');
	opts.secretOrKey = config.secret;
	passport.use(new JwtStrategy(opts, (payload, done) => {
		User.findUserById(payload._doc._id, (err, user) => {
			if (err) {
				return done(err, done);
			}
			if (user) {
				return done(null, user);
			} else {
				return done(null, false);
			}
		})
	}));
}