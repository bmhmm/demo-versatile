const express = require('express');
const app = express();

const port = 5500;



//User route middleware file
const userRoutes = require('./routes/userRoute')

app.use('/api/user', userRoutes);


//questions routes middleware

//answer routes middleware

app.listen(port, (err) => {
   if(err) {
    console.log(err.message);
   }
   else{
    console.log(`Server is running on port ${port}`);
   }
 })






