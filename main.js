// Include our packages in our main server file
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var passport = require('passport');
var config = require('./config/sysProp');

app = express();
mongoose.connect(config.database);

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(passport.initialize());

require('./config/passport')(passport);


var apiRoutes = express.Router();

//Protect Routes with JWT
require('./routes/authRtr')(apiRoutes, passport);
require('./routes/categoryRtr')(apiRoutes, passport);
//require('./routes/makerRtr')(apiRoutes, passport);
//require('./routes/productRtr')(apiRoutes, passport);

// test apiRoute
/*
apiRoutes.get('/dashboard', passport.authenticate('jwt', { session: false }), function(req, res) {
  res.send('It worked! User id is: ' + req.user._id + '.');
});
*/

app.use('/api', apiRoutes);

// Start Server
app.listen(config.port);
console.log('Your server is running on port ' + config.port + '.');