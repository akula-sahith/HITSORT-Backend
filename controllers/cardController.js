const Card = require("../models/Card");

exports.getAllCards = async (req, res) => {
  const cards = await Card.find();
  res.json(cards);
};

exports.updateCard = async (req, res) => {
  const { cardId, sellerName, numberOfGames, amount, paymentType } = req.body;

  let card = await Card.findOne({ cardId });

  if (!card) {
    card = new Card({
      cardId,
      sellerName,
      numberOfGames,
      amount,
      paymentType,
    });
  } else {
    card.sellerName = sellerName;
    card.numberOfGames = numberOfGames;
    card.amount = amount;
    card.paymentType = paymentType;
  }

  await card.save();
  res.json(card);
};
