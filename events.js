const express = require('express')

const EventEmitter = require('events')

const app = express()
const event = new EventEmitter();

let count = 0 ;

event.on('CountAPi',()=>{
    count++;
    console.log(" Event Called",count)
})

app.get('/',(req , resp)=>{
    resp.send('Api called')
    event.emit('CountAPi')
})

app.get('/search',(req , resp)=>{
    resp.send('search Api called')
    event.emit('CountAPi')
})

app.get('/update',(req , resp)=>{
    resp.send('update Api called')
    event.emit('CountAPi')
})

app.listen(6000)

