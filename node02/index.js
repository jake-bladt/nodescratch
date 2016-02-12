var express = require('express');
var path = require('path');

var router = express.Router();

var server = express();
server.set('views', path.join(__dirname, 'views'));
server.set('images', path.join(__dirname, 'images'));

server.listen(8899, function() {
	console.log("Server listening on port 8899");
})

router.get('/', function(req, res) {
	res.send('You found the front page, skipper!');
});
