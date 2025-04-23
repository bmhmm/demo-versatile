const mysql2 = require('mysql2');
const dbConnection = mysql2.createConnection({ 
   user:"bmhmmy",
   database:"demo_versatile",
   host:"localhost",
   password:"bmhmmy",
})

dbConnection.execute("SELECT 'test' ",( err, result) => {
    if(err) {
        console.log(err.message)
    }
    else {
        console.log(result)
    }
 })