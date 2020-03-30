const express = require("express");
const router = express.Router();
const passport = require('passport');
const Patient = require('../models/Patient');
const Doctor = require('../models/Doctor');
const Report = require('../models/R eport');
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

router.get('/report/:id', (req, res) => {
    Report.findById(req.params.id)
        .then(report => res.json(report))
        .catch(error => res.status(404).json({ noReportFound: 'no report found with given ID' }));
});

//ONLY FOR TESTING PURPOSE
router.get('/all', (req, res) => {
    Report.find().sort({ date: -1 })
        .then(reports => {
            const response = {
                reports: reports
            };
            res.json({ response })
        })
        .catch(error => res.status(404).json({ noReportsFound: 'no reports found' }));
});

module.exports = router;