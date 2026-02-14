const mongoose = require("mongoose");
require("dotenv").config();

const Card = require("./models/Card");

mongoose.connect(process.env.MONGO_URI).then(async () => {
  const cards = [];

  for (let i = 401; i <= 450; i++) {
    const number = i.toString().padStart(2, "0");
    cards.push({
      cardId: `HS${number}`,
      sellerName: "NOT_SOLD",
      numberOfGames: 0,
      amount: 0,
      paymentType: "CASH",
    });
  }

  await Card.insertMany(cards);
  console.log("✅ 401 cards inserted (HS00 to HS400)");
  process.exit();
});
