const db = require("../config/db");

exports.sendTokens = (req,res)=>{

 const {senderId, receiverId, amount} = req.body;

 const checkSender = "SELECT * FROM users WHERE id=?";

 db.query(checkSender,[senderId],(err,senderResult)=>{

  if(err){
   return res.json(err);
  }

  if(senderResult.length==0){
   return res.json({msg:"Sender not found"});
  }

  const sender = senderResult[0];

  if(sender.balance < amount){
   return res.json({msg:"Insufficient balance"});
  }

  const checkReceiver = "SELECT * FROM users WHERE id=?";

  db.query(checkReceiver,[receiverId],(err,receiverResult)=>{

   if(err){
    return res.json(err);
   }

   if(receiverResult.length==0){
    return res.json({msg:"Receiver not found"});
   }

   const receiver = receiverResult[0];

   if(receiver.riskScore > 0.7){
    return res.json({
     warning:"⚠ This account has suspicious activity"
    });
   }

   const updateSender =
   "UPDATE users SET balance = balance - ? WHERE id=?";

   db.query(updateSender,[amount,senderId],(err)=>{
    if(err){
     return res.json(err);
    }

    const updateReceiver =
    "UPDATE users SET balance = balance + ? WHERE id=?";

    db.query(updateReceiver,[amount,receiverId],(err)=>{
     if(err){
      return res.json(err);
     }

     const insertTx =
     "INSERT INTO transactions(sender,receiver,amount) VALUES(?,?,?)";

     db.query(insertTx,[senderId,receiverId,amount],(err)=>{
      if(err){
       return res.json(err);
      }

      res.json({msg:"Transaction successful"});
     });

    });

   });

  });

 });

};