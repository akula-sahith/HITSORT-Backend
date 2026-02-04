const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema(
  {
    cardId: {
      type: String,
      unique: true,
      required: true, // HS01, HS02
    },
    sellerName: {
      type: String,
      required: true,
    },
    numberOfGames: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    paymentType: {
      type: String,
      enum: ["UPI", "CASH", "REFERRED"],
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Card", cardSchema);
