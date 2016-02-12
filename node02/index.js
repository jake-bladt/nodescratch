var express = require('express');
var path = require('path');

var router = express.Router();
var server = express();

server.set('view engine', 'ejs');

server.set('views', path.join(__dirname, 'views'));
server.set('images', path.join(__dirname, 'images'));

server.get('/secret', function(req, res) {
	res.status(404).send('There are no secrets here.');
});

server.get('/', function(req, res) {
	res.render('home');
});

server.listen(8888, function() {
	console.log("Server listening on port 8888");
})

module.exports = router;
