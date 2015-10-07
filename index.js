var express = require('express'),
	port    = process.env.PORT || 3333,
	app     = express();
 
app.use('/', express.static(__dirname + '/'));
app.use('/dist', express.static(__dirname + '/dist'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.listen(port);
