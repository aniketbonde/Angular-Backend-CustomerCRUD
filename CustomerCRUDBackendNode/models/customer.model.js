const mongoose = require("mongoose");

var CustomerSchema = new mongoose.Schema({
  id: {
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

mongoose.model("Customer", CustomerSchema);
