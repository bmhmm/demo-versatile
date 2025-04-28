const express = require('express');
const router = express.Router();

//importing auth middleware
const authMiddleware = require("../middleware/authMiddleware.js")

//user controllers
const {register, login,checkUser} = require ('../controller/userController')


//Register route
router.post('/register', register)
 
 
 //Login route
 router.post('/login', login)
 
  //check user
 router.get('/check', authMiddleware,checkUser)


  module.exports = router