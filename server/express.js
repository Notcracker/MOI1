var express = require('express');
var path = require('path');
var morgan = require('morgan');
var mongodb = require('mongodb').MongoClient,
	assert = require('assert');

	
var urldb = 'mongodb://localhost:27017/conFusion';

var hostname = 'localhost';
var port = 3000;

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(morgan('dev'));
app.use('/',require('./search.js'))
app.use('/aList',require('./animelist.js'))
app.use(express.static(path.join(__dirname, 'public')));
app.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});