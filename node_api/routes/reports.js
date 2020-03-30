const express = require("express");
const router = express.Router();
const passport = require('passport');
const Patient = require('../models/Patient');
const Doctor = require('../models/Doctor');
const Report = require('../models/Report');
const validateReport = require('../validation/report-validation');

router.get('/test', (req, res) => {
    res.json({ msg: 'Report route work' })
});

router.post('/report', passport.authenticate('jwt', { session: false }), (req, res) => {
    const newReport = new Report({
        patient: req.user.id,
        name: req.user.name,
        avatar: req.user.avatar,
    });

    newReport.save().then(report => res.json(report));
    Patient.findOne({ email: req.user.email }).then(patient => {
        if (!patient) {
            console.log('no patient found');
        }
        patient.reports.unshift({ report: newReport.id });
        patient.save();
    }).catch(err => console.log(err));
});

module.exports = router;