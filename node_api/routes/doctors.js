const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor');

router.get('/test', (req, res) => {
    res.json({ msg: 'Doctor route work' })
});

module.exports = router;