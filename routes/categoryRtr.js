var categoryController = require('../controllers/categoryCtrl');

module.exports = function (router) {
	
  router.post('/categories', passport.authenticate('jwt', { session: false }), 
		  categoryController.postCategories);
  router.get('/categories', passport.authenticate('jwt', { session: false }),
		  categoryController.getCategories);
  router.get('/categories/:id', passport.authenticate('jwt', { session: false }), 
		  categoryController.getCategory);
router.put('/categories/:id', passport.authenticate('jwt', { session: false }), 
		  categoryController.putCategory);
  router.delete('/categories/:id', passport.authenticate('jwt', { session: false }),
		  categoryController.deleteCategory);
  
  return router;
};