const mongoose = require("mongoose");

var CustomerSchema = new mongoose.Schema({
  _id: {
    type: Number,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Customer", CustomerSchema);
