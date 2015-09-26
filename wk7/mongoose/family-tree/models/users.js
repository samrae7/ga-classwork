var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email:{type: String, unique: true},
  meta: {
    age: Number,
    website: String,
    github: String
  },
  createdAt: Date,
  updatedAt: Date
})



userSchema.methods.sayHello = function() {
  return 'Hello ' + this.firstName;
}

userSchema.methods.reverseName = function(){
  function reverse(s) {
  return s.split('').reverse().join('');
  }
  return reverse(this.firstName);
}

var User = mongoose.model('User', userSchema)

module.exports = User;