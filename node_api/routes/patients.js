const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const passport = require('passport');
const Patient = require('../models/Patient');
const validatePatientRegister = require('../validation/patient-register');
const validateLoginInput = require('../validation/patient-login');

router.get('/test', (req, res) => {
    res.json({ msg: 'Patient route work' })
});

router.post('/register', (req, res) => {
    const { errors, isValid } = validatePatientRegister(req.body);
  
    if (!isValid) {
      return res.status(400).json(errors);
    }

    Patient.findOne({ email: req.body.email }).then(patient => {
        if (patient) {
            errors.email = 'Email already exists';
            return res.status(400).json(errors);
        } else {
            const avatar = gravatar.url(req.body.email, {
            s: '200', // Size
            r: 'pg', // Rating
            d: 'mm' // Default
            });
            const newPatient = new Patient({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password,
            avatar,
            age: req.body.age,
            city: req.body.city,
            address: req.body.city,
            gender: req.body.gender
            });

            bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newPatient.password, salt, (err, hash) => {
                if (err) throw err;
                newPatient.password = hash;
                newPatient
                .save()
                .then(patient => res.json(patient))
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
  
    Patient.findOne({ email }).then(patient => {
      if (!patient) {
        errors.email = 'Email does not exist';
        return res.status(404).json(errors);
      }
  
      bcrypt.compare(password, patient.password).then(isMatch => {
        if (isMatch) {
          const payload = { id: patient.id, name: patient.name, email: patient.email, avatar: patient.avatar };
  
          jwt.sign(
            payload,
            keys.secretOrKey,
            { expiresIn: 36000 },
            (err, token) => {
              res.json({
                success: true,
                patientId: patient.id,
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

module.exports = router;