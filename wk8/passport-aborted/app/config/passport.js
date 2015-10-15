var LocalStrategy = require('passport-local').Strategy
var User = require('../models/user')

module.exports = function(passport) {

  passport.serializeUser(function(user, callback){
    callback(null, user.id)
  })

  passport.deserializeUser(function(id, callback){
    User.findById(id, function(err,user){
      callback(err,user)
    })
  })


  passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }, function(req, email, password, callback) {
    process.nextTick(function() {
      User.findOne({'local.email': email }, function(err,user){
        if(err) return callback(err)

        //if there is a user with the email address provided do:
        if(user) {
          return callback(null, false, req.flash('signupMessage', 'This email has already been taken'))
        } else {
          //There is no user with that email
          var newUser = new User()
          newUser.local.email = email
          newUser.local.password = newUser.encrypt(password);

          newUser.save(function(err,user){
            if(err) throw err
            return callback(null, newUser)
          })
        }
      })
    })
  }))
}