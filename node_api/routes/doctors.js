const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const passport = require('passport');
const Doctor = require('../models/Doctor');
const validatedoctorRegister = require('../validation/doctor-register');
const validateLoginInput = require('../validation/doctor-login');

//require("../config/passport2")(passport);

router.get('/test', (req, res) => {
    res.json({ msg: 'doctor route work' })
});

router.post('/register', (req, res) => {
    const { errors, isValid } = validatedoctorRegister(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    Doctor.findOne({ email: req.body.email }).then(doctor => {
        if (doctor) {
            errors.email = 'Email already exists';
            return res.status(400).json(errors);
        } else {
            const avatar = gravatar.url(req.body.email, {
            s: '200', // Size
            r: 'pg', // Rating
            d: 'mm' // Default
            });
            const newdoctor = new Doctor({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password,
            avatar,
            city: req.body.city,
            clinickAddress: req.body.clinickAddress,
            gender: req.body.gender,
            specialization: req.body.specialization,
            openingTime: req.body.openingTime,
            closingTime: req.body.closingTime
            });

            bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newdoctor.password, salt, (err, hash) => {
                if (err) {
                    throw err;
                }
                newdoctor.password = hash;
                newdoctor
                .save()
                .then(doctor => res.json(doctor))
                .catch(err => console.log(err));
            });
            });
        }
    });
});

router.post('/login', (req, res) => {

    const { errors, isValid } = validateLoginInput(req.body);
  
    if (!isValid) {
      console.log('something is wrong here');
      return res.status(400).json(errors);
    }
  
    const email = req.body.email;
    const password = req.body.password;
  
    Doctor.findOne({ email }).then(doctor => {
      if (!doctor) {
        errors.email = 'Email does not exist';
        return res.status(404).json(errors);
      }
  
      bcrypt.compare(password, doctor.password).then(isMatch => {
        if (isMatch) {
          const payload = { id: doctor.id, name: doctor.name, email: doctor.email, avatar: doctor.avatar };
  
          jwt.sign(
            payload,
            keys.secretOrKey,
            { expiresIn: 36000 },
            (err, token) => {
              res.json({
                success: true,
                doctorId: doctor.id,
                token: 'Bearer ' + token
              })
            }
          )
        } else {
          errors.password = 'Incorrect password';
          return res.status(400).json(errors);
        }
      });
    });
  });

router.get('/find/:id', (req, res) => {
  Doctor.findById(req.params.id).then(doctor => res.json(doctor))
          .catch(error => res.status(404).json({ noDoctorFound: 'no doctor found with given ID' }));
});

router.get('/city/:city', (req, res) => {
  Doctor.find({ city: req.params.city }).then(doctors => {
    res.json({count: doctors.length, doctors: doctors});
  }).catch(error => res.status(400).json({noDoctorFound: 'no doctor found in that city'}));
});

router.get('/all', (req, res) => {
  Doctor.find().then(doctors => {
    res.json({count: doctors.length, doctors: doctors});
  }).catch(error => res.status(404).json({ noDoctorFound: 'no doctor found with given ID' }));
});

module.exports = router;