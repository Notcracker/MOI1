var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient,
	assert = require('assert');

	
var urldb = 'mongodb://localhost:27017/conFusion';


var animelist = express.Router();

animelist.use(bodyParser.json());
animelist.route('/')
.post(function(req,res,next){
		console.log(req.body.userName);
        MongoClient.connect(urldb,function(err,db){
			assert.equal(err,null);
			console.log('Connected correctly to server');
			db.close();
		});
		res.end('May!')
})

module.exports = animelist;