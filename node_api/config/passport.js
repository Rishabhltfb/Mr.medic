const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const Patient = mongoose.model('patients');
const keys = require('./keys');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      Patient.findById(jwt_payload.id)
        .then(patient => {
          if (patient) {
            return done(null, patient);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};