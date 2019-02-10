const express = require("express");
const mongoose = require("mongoose");
const app = express();

const Lead = mongoose.model("leads");

app.use(async (req, res, done) => {
  const existingLead = await Lead.fineOne({ name: name });
  if (existingLead) {
    return done(null, existingLead);
  }
  const lead = new Lead({
    name: "",
    contactInfo: ""
  }).save();
  done(null, lead);
});
