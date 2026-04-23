const router = require("express").Router();

const { getBalance, addTokens } = require("../controllers/walletController");

// Get wallet balance
router.get("/:id", getBalance);

// Add tokens to a wallet (admin mint)
router.post("/add", addTokens);

module.exports = router;