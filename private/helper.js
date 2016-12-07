function initialDataSetup()
{
	// Inserting Categories
/*
  var os = require("os");
var hostname = os.hostname();
 */
	db.categories.insert({
		name : 'cars',
		description : 'Different types of cars',
		thumbnailId : 'public/img/category/cars.png',
		makerIds : []
		//createDate : Date.now
		});

	// Inserting Makers
	db.makers.insert({
		name : '',
		description : '',
		thumbnailId: '',
		productIds: []
		//createDate : Date.now -- createdUser maintUser maintDate
	});

	// Inserting Products
}

