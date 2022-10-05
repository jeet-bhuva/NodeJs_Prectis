const express = require('express')
const dbconect = require('./mongo')
const app = express();

app.get("/",async (req , resp)=>{
    let data = await dbconect()
    data = await find().toArray()
    // console.log(data)
    resp.send(data)
})

app.listen(8000)