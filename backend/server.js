const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

require("./config/db");

const authRoutes = require("./routes/authRoutes");
const walletRoutes = require("./routes/walletRoutes");
const transactionRoutes = require("./routes/transactionRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use("/api/wallet", walletRoutes);
app.use("/api/transaction", transactionRoutes);
app.use("/api/admin", adminRoutes);

app.listen(5000, () => {
 console.log("Server running on port 5000");
});