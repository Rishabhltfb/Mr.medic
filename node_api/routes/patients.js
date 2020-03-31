const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const passport = require('passport');
const Patient = require('../models/Patient');
const multer = require('multer');
const validatePatientRegister = require('../validation/patient-register');
const validateLoginInput = require('../validation/patient-login');

//require("../config/passport")(passport);

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
            address: req.body.address,
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

router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({
    patient: req.user
  });
});

router.delete('/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Patient.findOneAndRemove({ _id: req.user.id }).then(() => {
      res.json({ success: true })
        .catch((error) => {
          assert.isNotOk(error, 'Promise error');
          done();
        });
    });
  }
);

router.get('/all', (req, res) => {
  Patient.find()
    .exec()
    .then(patients => {
      const response = {
        count: patients.length,
        patients: patients
      };
      res.status(200).json(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

// only for testing purpose
router.get('/patient/:id', (req, res) => {
  Patient.findById(req.params.id)
      .then(patient => res.json(patient))
      .catch(error => res.status(404).json({ noPatientFound: 'no patient found with given ID' }));
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/patients/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({ storage: storage, limits: { fileSize: 1024 * 1024}, fileFilter: fileFilter });

router.patch("/avatar/:id", upload.single('avatar'), (req, res, next) => {
  const id = req.params.id;
  const updateOps = {
    avatar: req.file.path
  };
  console.log('1');
  Patient.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "image uploaded",
        request: {
          type: "GET",
          url: "http://localhost:5000/api/patients/patient/" + id
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

module.exports = router;