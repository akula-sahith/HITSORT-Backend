const Expenditure = require("../models/Expenditure");


exports.getAllExpenditures = async (req, res) => {
  try {
    const expenditures = await Expenditure.find();  // ✅ await added
    res.status(200).json(expenditures);             // ✅ real data now
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


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
