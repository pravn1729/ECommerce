var authCtrl = require('../controllers/authCtrl');

module.exports = function (router) {
	
  router.post('/register',
		  authCtrl.register);
  router.post('/authenticate',
		  authCtrl.authenticate);
 
  return router;
};