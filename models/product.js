var mongoose = require('mongoose');
var productSchema = new mongoose.Schema({
	name : { type : String },
	makerId : { type : String },
	description :  { type : String },
	thumbnailIds : [],
	price :  { type : Number },
	rating :  { type : Number },
	createDate : {
		type : Date,
		default : Date.now
	}
});

module.exports = mongoose.model('Product', productSchema);

