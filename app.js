var express = require('express');
var app = express()
var port = process.env.PORT || 3000;
var server = require('http').createServer(app);
var morgan = require('morgan');
var bodyParser = require('body-parser');
var io = require('socket.io')(server);

app.use(morgan('dev')); // for logs

app.use(express.static(__dirname + '/public')); // serves front end JS and CSS

app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', function(req, res) {
  res.render('index');
});

io.on('connection', function(socket){
  socket.on('message', function(msg){ 
    console.log(msg)
    io.emit('message', msg)
  })
})

server.listen(port, function() {
  console.log('running on localhost port %s', port);
})