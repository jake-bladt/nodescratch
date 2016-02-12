var express = require('express');

var server = express();
server.listen(8899, function() {
	console.log("Server listening on port 8899");
})
