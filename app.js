var express = require('express');
var bodyParser = require('body-parser');
var controller = require('./controller/controller-locations.js')


var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/', controller.home)

app.get('/:id',controller.index)

// app.get('/end', function(req,res){
// 		res.render('End')
// 	}

var server = app.listen(6875, function() {
	console.log('Express server listening on port ' + server.address().port);
});
