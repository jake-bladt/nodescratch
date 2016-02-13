var express = require('express');
var path = require('path');

var router = express.Router();
var server = express();

server.set('view engine', 'ejs');

server.set('views', path.join(__dirname, 'views'));
server.use('/images', express.static(__dirname + '/images'));

server.get('/secret', function(req, res) {
	res.status(404).send('There are no secrets here.');
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
