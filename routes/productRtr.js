var productController = require('../controllers/productCtrl');

module.exports = function (router) {
	
  router.get('/products', passport.authenticate('jwt', { session: false }), 
		  productController.getAllProductsByMaker);
  router.get('/products/:name', passport.authenticate('jwt', { session: false }),
		  productController.getProductByName);
 
  return router;
};