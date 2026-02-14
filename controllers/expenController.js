const Expenditure = require("../models/Expenditure");


exports.getAllExpenditures = async (req,res) => {
    const expenditures = Expenditure.find();
    res.json(expenditures);
}


exports.updateExpenditure = async (req, res) => {
  const { usedFor, amount, usedBy } = req.body;

  let expenditure = await Expenditure.findOne({ usedFor });

  if (!expenditure) {
    expenditure = new Expenditure({
      usedFor,
      amount,
      usedBy,
    });
  } else {
    expenditure.usedFor = usedFor;
    expenditure.usedBy = usedBy;
    expenditure.amount = amount;
  }

  await expenditure.save();
  res.json(expenditure);
};
