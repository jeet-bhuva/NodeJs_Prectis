const mysql = require('mysql')

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "jeet"
});

con.connect((err)=>{
    if(err){
        console.log('Error In Connection')
    }
})

module.exports = con ;

// file ---> sql.js  