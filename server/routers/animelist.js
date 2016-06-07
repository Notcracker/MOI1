var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient,
	assert = require('assert');
var urldb = 'mongodb://localhost:27017/mal';

var animelist = express.Router();

animelist.use(bodyParser.json());
animelist.route('/:userName')
.get(function(req,res,next){
	console.log(req.params.userName);
	res.sendFile('/home/miri/moi1/server/public/anime.html');

})

animelist.route('/details/:userName')
.get(function(req,res,next){
	MongoClient.connect(urldb,function(err,db){
		assert.equal(err,null);

		var collection = db.collection('mally');

			collection.find({'userName':req.params.userName}).toArray(function(err,arrra){
				assert.equal(err,null);
				res.send(JSON.stringify({alist:arrra[0]}));
			});
	})
})

module.exports = animelist;