var express = require('express');
var app = express();
var logger = require('morgan');
var bodyParser = require('body-parser');
var jade = require('jade')
var Quote = require('./models/quote');

// database setup
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/express-views-and-quotes');

// app setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));


app.get('/', function (req, res) {
  // res.render('index', { title: 'Quit a good quote app', message: 'Hello there welcome to Quotes Schmotes!'}, {quotes})
  res.redirect('/quotes')
})

// our routes
var routes = require('./config/routes');
app.use(routes);

app.listen(3000);