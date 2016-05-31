var express = require('express');
var morgan = require('morgan');
var mongodb = require('mongodb').MongoClient,
	assert = require('assert');

	
var urldb = 'mongodb://localhost:27017/conFusion';

var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));
app.use('/aList',require('./animelist.js'))
app.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});