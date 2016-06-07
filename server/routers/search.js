var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient,
	assert = require('assert');
var Promise = require("bluebird");
var URL = require('url-parse');
var request = require('request');
var cheerio = require('cheerio');
var mongoose = require('mongoose');
//var tr = require('tor-request');	


var urldb = 'mongodb://localhost:27017/mal';
var obj = {};
var START_URL = null;
var url = null;
var baseUrl = null;
var search = express.Router();
var m = null;

search.use(bodyParser.json());
search.route('/')
.get(function(req,res,nex){
	res.sendFile('/home/miri/moi1/server/public/index.html')
})
.post(function(req,res,next){
		console.log(req.body.userName);
		START_URL = "http://myanimelist.net/malappinfo.php?u="+req.body.userName+"&status=all&type=anime";
		url = new URL(START_URL);
		baseUrl = url.protocol + "//" + url.hostname;


		visitPage(START_URL)
		.then(GetStats)
		.then(function(){
			MongoClient.connect(urldb,function(err,db){
				assert.equal(err,null);
				console.log('Connected correctly to server',req.body.userName);
				
				var collection = db.collection('mally');

					collection.find({'userName':req.body.userName}).toArray(function(err,arrra){
						assert.equal(err,null);
						console.log(obj);
							if(!arrra[0]){

								collection.insert(obj, function(err, result) {
										assert.equal(err,null);		
										
										var name = req.body.userName;
										collection.find({'userName':req.body.userName}).toArray(function(err,obj){
											if (err) throw err;
											console.log('New user has been created!');
											console.timeEnd('function');
											res.send(JSON.stringify({userName2:req.body.userName}));
											//res.end(JSON.stringify(obj[0]));
											db.close();
											
										});
											
									});
								} else{
									if (err) throw err;
									console.log('Already exist!');
									console.timeEnd('function');
									res.send(JSON.stringify({userName2:req.body.userName}));
									
									//res.end(JSON.stringify(arrra[0]));
									db.close();
						};

					});
			});
		});

      
});

module.exports = search;




//helpers


function visitPage(url) {
	return new Promise(function(resolve, reject){
						
				// Make the request
				console.log("Visiting page " + url);
				request(url, function(error, response, body) {
				 // Check status code (200 is HTTP OK)
				 console.log("Status code: " + response.statusCode);
				 
				 // Parse the document body
				 var $ = cheerio.load(body, { xmlMode: true });
				 obj.meanScore = 0;
				 var L = 0;
				 var userName = $('user_name').text();
				 var userId = $('user_id').text();
				 obj.userName= userName;
				 obj._id = userId;
				 m = userId;
				 obj['anime']=[];
				 $('anime').each(function(i, element){
				 	var id = $(this).children('series_animedb_id');
				 	var allEp = $(this).children('series_episodes').text();
				 	var watchedEp = $(this).children('my_watched_episodes').text();
				 	var myScore = Number($(this).children('my_score').text());
				 	obj.anime.push({ url: baseUrl + '/anime/' + id.text(),
				 		_id: id.text(),
				 		seriesTitle: $(this).children('series_title').text(),
				 		myScore: myScore,
				 		tags: $(this).children('my_tags').text(),
				 		myStartDate: $(this).children('my_start_date').text(),
				 		myFinishDate: $(this).children('my_finish_date').text(),
				 		myStatus: $(this).children('series_status').text(),
				 		allEp: allEp,
				 		watchedEp: watchedEp
				 	});

				 	if ((Number($(this).children('my_score').text()))!==0){
				 		L = L+1;
						obj.meanScore = (myScore + obj.meanScore)/L;
						//console.log(meanScore);
					
					}


				});
				resolve(obj);
							
				 
				});
	
});
};

function GetStats(obj) {
	return new Promise(function(resolve){
				console.time('function')
				
				var m = obj.anime;
				var le= m.length;
				
				var l = 0;
				obj.anime.forEach(function(value){
					
					//console.log(value.id);
					request('http://myanimelist.net/includes/ajax.inc.php?t=64&id='+value.id,
							//method: "GET",
							//proxy:'http://101.96.10.47:83'
							//timeout:10000
						//},
						function(error, response, body){
							
							
							console.log(response.statusCode);
							if (!error && response.statusCode == 200) {

					            var $ = cheerio.load('<body>' + body + '</body>');
					            var $body = $('body');

					            $('body div').children().empty();
					            var description = $('body div').text().trim();
					            var keys = $('body span').text().split(':');
					            keys.splice(-1, 1);
					            $body.children().empty();
					            var values = $body.text().trim().split('\n');

					            
					            value.description = description;
					           

					            for(var j = 0; j<keys.length; j++) {
					                value[(keys[j].toLowerCase().trim())] = (values[j].trim());
					                /*if ((keys[j].toLowerCase().trim())=='genres'){
					                	value[(keys[j].toLowerCase().trim())] = values[j].trim().split(', ');
					                } else {
										value[(keys[j].toLowerCase().trim())] = (values[j].trim());
					                }*/
			            		}
			            		
			            		//console.log(l, le);
			            		
		            		console.log(value);
				        }
				        l = l +1;
				      // console.log(l, le);
				        if (l===le){
							console.log('resolve!')
							resolve(obj);
						}
						

					});


				});
			
		

	});
};	

			
		