var mongoose = require('mongoose')
var bcrypt = require('bcrypt')

var userSchema = new mongoose.Schema({
  name: String,
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true}
})


userSchema.pre('save', function(next) {
  var user = this

  if(!user.isModified('password')) return next()

  //generate a salt
  bcrypt.genSalt(5, function(err, salt) {
    if (err) return next(err)

    //hash the password with our salt
    bcrypt.hash(user.password, salt, function(err, hash){
    if (err) return next(err)

      //overide the plaintext password with thehashed version
      user.password = hash
      next()
      })
  })
})

userSchema.methods.authenticate = function(password, callback) {
  //'compare' is a bcrypt function that will return a  boolean
  bcrypt.compare(password, this.password, function(err, isMatch){
    callback(null, isMatch)
  })
}

var User = mongoose.model('User', userSchema)

module.exports = User