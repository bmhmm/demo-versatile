// db connection
const dbConnection = require('../db/dbConfig') 


//bycryption
const bcrypt = require('bcrypt')


 async function register(req, res){
   const  {username,firstname, lastname, email, password} = req.body;
   if  (!email || !password || !firstname || !lastname || !username) {
    return res.status(400).json({msg:"please provide all required fields"})  
   }

   try {
      const [user] = await dbConnection.query("select username,userid from users where username = ? or email = ?", [username, email])
        if(user.length > 0) {
            return res.status(400).json({msg:"user already existed"})
        }
      if(password.length <=8 ) {
       return res.status(400).json({msg:"password should be more than 8 characters"})
      }
        // encrypt password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)


    await dbConnection.query("INSERT INTO users(username, firstname, lastname, email, password) VALUES(?,?,?,?,?)" ,[username,firstname, lastname, email, hashedPassword])
    return res.status(200).json({msg:"user registered" })

   } catch(error){
    console.log(error.message)
    return res.status(500).json({msg:"something went wrong, try again later!"})
   }
    }

async function login(req, res){
    res.send('login')
}

async function checkUser(req, res){   
    res.send('check user')
}

module.exports = {register, login,checkUser}