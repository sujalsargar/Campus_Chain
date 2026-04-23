const router = require("express").Router();
const db = require("../config/db");

router.get("/transactions",(req,res)=>{

 const sql = "SELECT * FROM transactions";

 db.query(sql,(err,result)=>{
  res.json(result);
 });

});

router.get("/users",(req,res)=>{

 const sql = "SELECT * FROM users";

 db.query(sql,(err,result)=>{
  res.json(result);
 });

});

module.exports = router;