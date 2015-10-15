var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var User = mongoose.Schema({
  local : {
    email        : String,
    password     : String,
  }
});

User.methods.encrypt = function(password) {
  return bcrypt.hash(password, bcrypt.genSalt(10), null)
}

module.exports = mongoose.model('User', User);