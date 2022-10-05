const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "jeet"
});
// con.connect((err)=>{
//     if(err){
//         console.log("Error")
//     }else{
//         console.log("DB Connected...!")        
//     }
// })
// // console.log("DB connected...!")

con.query("select * from demo", (err, result) => {      
    console.log("result", result)
})

