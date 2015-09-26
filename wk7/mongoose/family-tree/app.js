var express = require('express')
var app = express()
var port = process.env.PORT || 3000

var User = require('./models/users')
//this means var User equals whatever is being exported from users.js

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/family-tree')//this is the Mongo db protocol

User.remove({}, function(){

  console.log('Users removed');

  var tom = User({
    firstName: 'Tom',
    lastName: 'Walker',
    email: 'tomwalker@walker.com'
  })

  var jen = User({
    firstName: 'Jen',
    lastName: 'Mah'
  })

  jen.save(function(err, user) {
    if (err) console.log(err);
    console.log('User ' + user.firstName + ' has been created');
    console.log(user.sayHello())
  })

  tom.save(function(err, user) {
    if (err) console.log(err);
    console.log('User ' + user.firstName + ' has been created');
    console.log(user.firstName + ' backwards is ' + user.reverseName());
  })

});


// User.find({}, function(err, users){
//   if (err) console.log(err);
//   console.log(users);
// })