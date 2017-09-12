var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.pre('save', function (next) {
    var user = this;
    bcrypt.genSalt(10, function (err, satl) {
        bcrypt.hash(user.password, satl)
            .then(function (hash) {
                user.password = hash;
                next();
            })
            .catch(function () {
                return next(err);
            })
    });
});

var User = mongoose.model('user', userSchema);
module.exports = User;