const jwt = require('jsonwebtoken');

async function authMiddleware(req, res, next){
   const authHeader = req.headers.authorization;
 if(!authHeader || !authHeader.startsWith("Bearer")){
    return res.status(401).json({msg:"Authentication invalid"})
 }
      const token = authHeader.split(" ")[1]

 try{
    
    const {username, userid}= jwt.verify(authHeader, "secret")
    // return res.status(200).json({msg:"Authentication success", data})
    req.user={username, userid};
    next()
 }

 catch(error){
    console.log(error.message)
    return res.status(401).json({msg:"Authentication invalid"})
 }
}

module.exports = authMiddleware