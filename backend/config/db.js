const mysql = require("mysql2");

const db = mysql.createConnection({
 host: "localhost",
 user: "root",
 password: "Sujal@27",      // put your mysql password here
 database: "campuschain"
});

db.connect((err) => {
 if (err) {
  console.error("Database connection failed:", err);
 } else {
  console.log("MySQL Connected");
 }
});

module.exports = db;