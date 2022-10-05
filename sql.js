const express = require('express')
const con = require("./sqlconfig")
const app = express();

app.use(express.json())


app.get("/", (req, resp) => {
    con.query("select * from demo ", (err, resuls) => {
        if (err) err;
        resp.send(resuls)
    })
})  

app.post("/", (req, resp) => {
    const data = req.body;
    con.query(`INSERT INTO demo SET ?`, data, (error, resuls, fields) => {
        if (error) error;
        resp.send(resuls)
    })
})

app.put("/:id", (req, resp) => {
    const data = [req.body.name, req.body.email, req.body.password, req.params.id];
    con.query(`UPDATE demo SET name = ?, email = ?, password = ? WHERE id = ?`, data, (error, resuls, fields) => {                                           
        if (error) error;
        resp.send(resuls)
    })
})

app.delete("/:id", (req, resp) => {
    con.query(`DELETE FROM demo WHERE id =` + req.params.id, (err, resuls) => {
        if (err) err;
        resp.send(resuls)
    })
})

app.listen(5000)