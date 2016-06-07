var express = require('express');
var bodyParser = require('body-parser');

var animelist = express.Router();


animelist.use(bodyParser.json());
animelist.route('/')
.get(function(req,res,next){
	res.sendFile('/home/miri/moi1/server/public/anime.html');
})


module.exports = animelist;