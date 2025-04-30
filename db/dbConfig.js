const mysql2 = require('mysql2');
const dbConnection = mysql2.createConnection({ 
   user: process.env.USER,
   database: process.env.DATABASE,
   host:"localhost",
   password: process.env.PASSWORD,
})

// dbConnection.execute("SELECT 'test' ",(err, result) => {
//     if(err) {
//         console.log(err.message)
//     }
//     else {
//         console.log(result)
//     }
//  })



module.exports = dbConnection.promise()