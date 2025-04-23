const express = require('express');
const router = express.Router();

//Register route
router.post('/register', (req, res) => { 
    res.send('register user')
 
 })
 
 
 //Login route
 router.post('/login', (req, res) => { 
     res.send('login user')
  
  })
 
  //check user
 router.get('/check', (req, res) => { 
     res.send('check user')
  
  })


  module.exports = router