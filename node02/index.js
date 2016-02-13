var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var router = express.Router();
var server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.set('view engine', 'ejs');

server.set('views', path.join(__dirname, 'views'));
server.use('/images', express.static(__dirname + '/images'));
server.use('/bower_components', express.static(__dirname + '/bower_components'));

server.post('/username', function(req, res) {
  var correctName = req.body.realUserName;
  res.send('Sorry about that, ' + correctName);
});

server.get('/check/:name', function(req, res) {
	res.render('check', {
		userName: req.params['name']
	});
});

server.get('/', function(req, res) {
	res.render('home', {
		userName: 'Jake',
		stepsData: [
			{date: '1-January-2016', steps_count: '10000'}, 
			{date: '2-January-2016', steps_count: '10550'}, 
			{date: '3-January-2016', steps_count: '12222'}, 
		]
	});
});

server.listen(8888, function() {
	console.log("Server listening on port 8888");
})

module.exports = router;
