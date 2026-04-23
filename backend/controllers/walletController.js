const db = require("../config/db");

exports.getBalance = (req,res)=>{

 const id = req.params.id;

 const sql = "SELECT balance,riskScore FROM users WHERE id=?";

 db.query(sql,[id],(err,result)=>{

  if(err) return res.json(err);

  res.json(result[0]);

 });

}


// Add tokens to a user wallet (Admin mint)
exports.addTokens = (req,res)=>{

 const {userId, amount} = req.body;

 const sql = "UPDATE users SET balance = balance + ? WHERE id=?";

 db.query(sql,[amount,userId],(err,result)=>{

  if(err){
   return res.json({error:"Database error"});
  }

  res.json({msg:"Tokens added successfully"});

 });

}