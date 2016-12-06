var mongoose = require('mongoose');
var makerSchema = new mongoose.Schema({
	name : { 
		type : String,
	    unique: true,
	    required: true
	    },
	description :  { type : String },
	thumbnailId : { type : String },
	productIds :  [],
	createDate : {
		type : Date,
		default : Date.now
	}
});

module.exports = mongoose.model('Maker', makerSchema);

