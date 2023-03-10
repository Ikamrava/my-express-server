const functions = require("firebase-functions");

const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("Server is running for test");
});

exports.app = functions.https.onRequest(app);
