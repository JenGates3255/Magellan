var location = require('../models/location.js');



var controller = {
	home: function(req,res){
		res.render('index',{
			voyageLocation: location[0]
		})
	},
	index: function(req, res) {
		var target = req.params.id
		for (var i = 0; i < location.length; i++) {
			if (location[i].location === target){
				res.render('index', {
					voyageLocation: location[i]
				});

			}
		};
	},
	
}
module.exports=controller