const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.get("/", (req, res) => res.send("Root path of the app"));

const db = require("./config/keys").mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => console.log("MongoDB Connected Succesfully"))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("server is running on port: " + port));