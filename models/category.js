var mongoose = require('mongoose');
var categorySchema = new mongoose.Schema({
	name : { 
		type : String,
	    unique: true,
	    required: true
	    },
	description :  { type : String },
	thumbnailId : { type : String },
	makerIds : [],
	createDate : {
		type : Date,
		default : Date.now
	}
});

module.exports = mongoose.model('Category', categorySchema);

