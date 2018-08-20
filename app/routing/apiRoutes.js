const friendList = require('../data/friends.js');
const path = require('path');

module.exports = function(app){
	app.get('/api/friends', function(req, res){
		res.json(friendList);
	});

	app.post('/api/friends', function(req, res){
		friendList.push(req.body);
	})
};