var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var User = require('../models/user');
var config = require('../config/sysProp');

// Setup work and export for the JWT passport strategy
module.exports = function(passport) {


  var opts = {
    secretOrKey: config.secret,
    jwtFromRequest: ExtractJwt.fromAuthHeader() //ExtractJwt.versionOneCompatibility({authScheme: 'Bearer'})
  };

  passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    console.log(jwt_payload);
    console.log('id is '+jwt_payload._doc._id);
    User.findOne({_id: jwt_payload._doc._id}, function(err, user) {
      if (err) {
        return done(err, false);
      }
      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    });
  }));

};


// jwt payload structure

/*
{ '$__':
   { strictMode: true,
     getters: {},
     wasPopulated: false,
     activePaths: { paths: [Object], states: [Object], stateNames: [Object] },
     emitter: { domain: null, _events: {}, _eventsCount: 0, _maxListeners: 0 } },
  isNew: false,
  _doc:
   { role: 'Client',
     __v: 0,
     password: '$2a$10$v/6bjJCtPusIYErvO9DPmeuRcjOWeHeXcD/sG0ZNjhgOS49asF/W6',
     email: 'kumar',
     _id: '58426e64dfe5db1ac87574ac' },
  _pres:
   { '$__original_save': [ null, null, null ],
     '$__original_validate': [ null ],
     '$__original_remove': [ null ] },
  _posts:
   { '$__original_save': [],
     '$__original_validate': [],
     '$__original_remove': [] },
  iat: 1480749378,
  exp: 1480759458 }


*/