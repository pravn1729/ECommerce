var Category = require('../models/category');

// POST /categories
exports.postCategories = function(req,res){

	var category = new Category();

	category.name = req.body.name;
	category.description = req.body.description || '';
	category.thumbnailId = req.body.thumbnailId || '';
	category.makerIds = req.body.makerIds || [];
	
	category.save(function(err){
		if(err)
			res.send(err);

		res.json({message: 'Category Added', data: product});
	});
};

// GET /categories
exports.getCategories = function(req, res){

	Category.find(function(err, categories){
		if(err)
			res.send(err);
		
		res.json(categories);
	});
};

// GET /categories/:id
exports.getCategory = function(req, res){

	Category.findById(req.params.id, function(err, category){
		if(err)
			res.send(err);
		
		res.json(category);
	});
};

// PUT /categories/:id
exports.putCategory = function(req, res){
	Category.findById(req.params.id, function(err, category){
		if(err)
			res.send(err);
		
		category.description = req.body.description || '';
		category.thumbnailId = req.body.thumbnailId || '';
		category.makerIds = req.body.makerIds || [];
		
		category.save(function(err){
			if(err)
				res.send(err);
			res.json(category);
		});
	});
};

// DELETE /categories/:id
exports.deleteCategory = function(req, res){
	Category.findByIdAndRemove(req.params.id, function(err){
		if(err)
			res.send(err);
		
		res.json({message : 'Category removed'});
	});
};