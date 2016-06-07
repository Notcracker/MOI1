var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var animeSchema = new Schema({
	myFinishDate: {
		type: String,
		required: true
	}, myStartDate: {
		type: String,
		required: true
	}, url: {
		type: String,
		required: true
	},myStatus:{
		type: String,
		required: true
	}, myScore:{
		type: Number,
		min: 1,
        max: 10,
		required: true
	}, seriesTitle:{
		type: String,
		required: true
	}, tags:{
		type: String,
		required: true
	}, watchedEp:{
		type: Number,
		required: true
	}, allEp:{
		type: Number,
		required: true
	},description: {
		type: String,
		required: true
	},genres:{
		type: Array,
		required: true
	},status: {
		type: String,
		required: true
	},type:{
		type: String,
		required: true
	},episodes: {
		type: Number,
		required: true
	},score:{
		type: Number,
		required: true
	},ranked:{
		type: String,
		required: true
	},popularity: {
		type: String,
		required: true
	},members: {
		type: Number,
		required: true
	}
});

var animelistSchema = new Schema({
	anime: [animeSchema],
	meanScore: {
		type: Number,
		required: true
	},
	uName: {
		type: String,
		required: true
	},
	uWatching: {
		type: Number,
		required: true
	},
	uCompleted: {
		type: Number,
		required: true
	},
	uOnhold: {
		type: Number,
		required: true
	},
	uDropped: {
		type: Number,
		required: true
	},
	uPTW: {
		type: Number,
		required: true
	},
	uDSW: {
		type: Number,
		required: true
	}

},{timestamps: true})

//creating model

var Anilists = mongoose.model('Anilist',animelistSchema);
module.exports = Anilist;