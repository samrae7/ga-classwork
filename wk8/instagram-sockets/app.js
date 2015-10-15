var express = require('express')
var app = express()
var server = require('http').createServer(app);
var morgan = require('morgan')
var port = process.env.PORT || 3000;
var instagram = require('instagram-node-lib');
var bodyParser = require('body-parser');
var io = require('socket.io')(server)

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs')
app.set('views', './views');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())



instagram.set('client_id', process.env.INSTAGRAM_CLIENT_ID)
instagram.set('client_secret', process.env.INSTAGRAM_CLIENT_SECRET);

instagram.set('callback_url', 'http://f9dab85c.ngrok.io/callback');
instagram.set('maxSockets', 50);

var tags = ['jazz','swing-dance', 'lindy', 'lindy-hop', 'balboa']

for (var i = 0; i< tags.length; i++){
  instagram.subscriptions.subscribe({object: 'tag', object_id: tags[i]})
}

//instagram.subscriptions.subscribe({ object: 'tag', object_id: 'blue' });

app.get('/', function(req, res){
  res.render('index')
})

app.get('/callback', function(request, response){
  instagram.subscriptions.handshake(request, response); 
});

app.post('/callback', function(req, res){
  var notification = req.body

  io.sockets.emit('instagram', notification)
})

server.listen(port, function(){
  console.log('something somethng dark side on port %s', port)
})