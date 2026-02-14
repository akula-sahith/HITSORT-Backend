const mongoose = require("mongoose");

const expenditureSchema = new mongoose.Schema({
  usedFor : {
    type: String,
    rerquired: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  usedBy: {
    type: String,
  },
});

module.exports = mongoose.model("Expenditure", expenditureSchema);
