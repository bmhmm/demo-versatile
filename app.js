require("dotenv").config()


const express = require('express');
const app = express();

const port = 5400;

// db connection
const dbConnection = require('./db/dbConfig.js') 


//User route middleware file
const userRoutes = require('./routes/userRoute')

//Question route middleware file
const questionRoutes = require('./routes/questionRoute')  

//json middleware to extract json data
app.use(express.json())

// User route middleware
app.use('/api/user', userRoutes);


//questions route middleware
app.use("/api/question", questionRoutes)



//questions routes middleware

//answer routes middleware




async function start()
{
try{
  const result= await dbConnection.execute("select  'test' ")
  app.listen(port)
  console.log('database connection established')
  console.log(`server is running on port ${port}`)
} catch (error){
  console.log(error.message)
}
}
start()











