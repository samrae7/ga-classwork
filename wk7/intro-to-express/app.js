var express = require('express');

var app     = express();
var port    = process.env.PORT || 3000

var router = express.Router();
var videoRouter = express.Router();
var bodyParser = require('body-parser')

app.set('views', './views')//viewsforusers can be called anything
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

var videos = []




//middleware logging functionality
app.use(function(req, res, next) {
  // console.log(You made a req.method request to req.url from req.id)
  console.log('%s request to %s from %s', req.method, req.url, req.ip);
  next();
})

router.get('/', function(req, res){
  res.send("Welcome");
})

router.get('/about', function(req, res) {
  res.send('about');
})

router.get('/contact', function(req, res) {
  res.send('contact');
})



// INDEX

videoRouter.get('/', function(req, res){
  // res.render('index', {header: 'index'});
  res.json(videos);
})

// SHOW

videoRouter.get('/:id', function(req, res){
  res.render('show', {header: 'show'})

  console.log(req.params)
  console.log(req.body)
})

// NEW

videoRouter.get('/', function(req, res){

})

// CREATE

videoRouter.post('/', function(req, res){
  console.log(req.body);
  videos.push(req.body);

})

// EDIT

videoRouter.get('/:id/edit', function(req, res){

})

// UPDATE

videoRouter.put('/:id', function(req, res){

})

// DELETE

videoRouter.delete('/:id', function(req, res){
  foods.find(.id == 6)
})


// middleware - sits between our request and the server. 
app.use('/useful-info', router);
app.use('/videos', videoRouter);


app.listen(port);
console.log('server started on '+ port)