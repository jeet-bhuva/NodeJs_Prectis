const { name } = require('ejs');
const express = require('express')
const getData = require('./mongo')
const mongodb = require('mongodb')

const app = express();
app.use(express.json());

app.get('/', async (req, resp) => {
    let data = await getData()
    data = await data.find().toArray()
    // console.log(data)
    resp.send(data)
})

app.post('/', async (req, resp) => {
    // console.log(req.body)    
    let data = await getData()
    let result = data.insertOne(req.body)
    resp.send(result)
})

app.put('/', async (req, resp) => {
    let data = await getData()  
    let result = data.updateOne(
        { name: "Y-52" },
        { $set:{name: "Y-50sA"}}
    )
    resp.send({result:"update"})
})

app.delete('/:id',async (req, resp)=>{
    console.log(req.params.id)
    let data =await getData();
    let result =await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    resp.send(result) 
})


app.listen(7000);
