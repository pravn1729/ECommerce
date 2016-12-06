var Product = require('./models/product');

// POST --> /api/products
exports.postProduct = function(req,res){

	var product = new Product();

	product.name = req.body.name;
	product.type = req.body.type;
	product.quantity = req.body.quantity;

	product.save(function(err){
		if(err)
			res.send(err);

		res.json({message: 'Product Added', data: product});
	});
};

// GET --> /api/products
exports.getProducts = function(req, res){

	Product.find(function(err, products){
		if(err)
			res.send(err);
		
		res.json(products);
	});
};

// GET --> /api/products/:product_id
exports.getProduct = function(req, res){

	Product.findById(req.params.product_id, function(err, product){
		if(err)
			res.send(err);
		
		res.json(product);
	});
};

// PUT --> /api/products/:product_id
exports.putProduct = function(req, res){
	Product.findById(req.params.product_id, function(err, product){
		if(err)
			res.send(err);
		product.quantity = req.body.quantity;
		product.save(function(err){
			if(err)
				res.send(err);
			res.json(product);
		});
	});
};

// DELETE --> /api/products/:product_id
export.deleteProduct = function(req, res){
	Product.findByIdAndRemove(req.params.product_id, function(err){
		if(err)
			res.send(err);

		res.json({message : 'Product removed'});
	});
};