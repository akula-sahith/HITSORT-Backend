const { getAllExpenditures , updateExpenditure } = require("../controllers/expenController");
const express = require("express");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", auth, getAllExpenditures
);
router.put("/update", auth, updateExpenditure);

module.exports = router;