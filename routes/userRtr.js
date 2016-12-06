var userController = require('../controllers/userCtrl');

module.exports = function (router) {
	
  router.get('/users',
		  userCtrl.getUser);
  router.post('/users',
		  userRtr.postUser);
  router.delete('/users',
		  userRtr.deleteUser);
  router.get('/users/:id',
		  userCtrl.getUserById);
  router.put('/users/:id',
		  userRtr.putUser);
  router.delete('/users/:id',
		  userRtr.deleteUser);
  
  return router;
};