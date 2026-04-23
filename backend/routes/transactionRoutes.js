const router = require("express").Router();
const {sendTokens} = require("../controllers/transactionController");

router.post("/send",sendTokens);

module.exports = router;