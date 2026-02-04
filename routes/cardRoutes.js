const express = require("express");
const auth = require("../middleware/authMiddleware");
const { getAllCards, updateCard } = require("../controllers/cardController");

const router = express.Router();

router.get("/", auth, getAllCards);
router.put("/update", auth, updateCard);

module.exports = router;
