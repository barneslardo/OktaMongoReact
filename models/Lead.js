const mongoose = require("mongoose");
const { Schema } = mongoose;

const leadSchema = new Schema({
  name: String,
  phoneNumber: String,
  notes: String
});

mongoose.model("leads", leadSchema);
