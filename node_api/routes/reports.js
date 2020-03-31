const express = require("express");
const router = express.Router();
const passport = require('passport');
const multer = require('multer');
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
        doctor: req.body.doctor
    });
    newReport.save().then(report => {
      report.dateStr = (report.date).toString();
      res.json(report)});
    Patient.findOne({ email: req.user.email }).then(patient => {
        if (!patient) {
            console.log('no patient found');
        }
        patient.reports.unshift({ report: newReport.id, heading: newReport.heading, date: newReport.dateStr });
        patient.save();
    }).catch(err => console.log(err));
    newReport.dateStr = (newReport.date).toString();
    newReport.save();
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
                count: reports.length,
                reports: reports
            };
            res.json({ response })
        })
        .catch(error => res.status(404).json({ noReportsFound: 'no reports found' }));
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/reports/');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });
  const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };

const upload = multer({ storage: storage, limits: { fileSize: 1024 * 1024 * 10}, fileFilter: fileFilter });

router.patch("/image/:id", upload.single('reportImage'), (req, res, next) => {
    const id = req.params.id;
    const updateOps = {
      reportImage: req.file.path
    };
    Report.update({ _id: id }, { $set: updateOps })
      .exec()
      .then(result => {
        res.status(200).json({
          message: "image uploaded",
          request: {
            type: "GET",
            url: "http://localhost:5000/api/reports/report/" + id
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

router.patch("/update/:id", (req, res, next) => {
  const id = req.params.id;
  const updateOps = {
      heading: req.body.heading,
      disease: req.body.disease,
      remarks: req.body.remarks,
      suggestedMedicines: req.body.suggestedMedicines,
      patientNotes: req.body.patientNotes
  };
  Report.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "details updated",
        updatedReport: this.report,
        request: {
          type: "GET",
          url: "http://localhost:5000/api/reports/report/" + id
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