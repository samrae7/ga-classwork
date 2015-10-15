var express      = require('express');
var app          = express();
var mongoose     = require('mongoose');
var passport     = require('passport');
// Use of connect-flash middleware is recommended to provide req.flash functionality when using Express 3.x.
// Used to be included in Express 2.x.
var flash        = require('connect-flash');
var ejsLayouts   = require("express-ejs-layouts");
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

mongoose.connect('mongodb://localhost/local-authentication-with-passport2'); 

app.use(morgan('dev')); 
app.use(cookieParser());
app.use(bodyParser()); 

app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.set("views","./views");
app.use(express.static(__dirname + '/public'));

// If sessions enabled, be sure to use express.session() before passport.session() to ensure that the login session is restored in the correct order.
app.use(session({ secret: 'WDI-GENERAL-ASSEMBLY-EXPRESS' }));

// passport.initialize() middleware is required to initialize Passport. 
app.use(passport.initialize());

// If your application uses persistent login sessions, 
// passport.session() middleware must also be used.
app.use(passport.session()); 
app.use(flash()); 

require('./config/passport')(passport);

app.use(function(req, res, next) {
  global.user = req.user;
  next();
})

var routes = require('./config/routes');
app.use(routes);

app.listen(3000);