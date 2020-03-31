const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require("morgan");
const passport = require('passport');

mongoose.Promise = global.Promise;
const app = express();
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/", (req, res) => res.send("Root path of the app"));

const db = require("./config/keys").mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => console.log("MongoDB Connected Succesfully"))
  .catch(err => console.log(err));

app.use('/uploads', express.static('uploads'));
const patient = require('./routes/patients');
app.use('/api/patients',patient);
const doctor = require('./routes/doctors');
app.use('/api/doctors',doctor);
const report = require('./routes/reports');
app.use('/api/reports',report)

app.use(passport.initialize());
require("./config/passport")(passport);
// require("./config/passport2")(passport);

app.use((req, res, next) => {
    const error = new Error("Route not found");
    error.status = 404;
    next(error);
});
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message
      }
    });

});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("server is running on port: " + port));