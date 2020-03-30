const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const Doctor = mongoose.model('doctors');
const keys = require('./keys');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport2 => {
  passport2.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      Doctor.findById(jwt_payload.id)
        .then(doctor => {
          if (doctor) {
            return done(null, doctor);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};