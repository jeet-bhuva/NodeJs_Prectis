const getData = require('./mongo')

const insert = async ()=>{
    const db = await getData();
    const result = db.insert([
        {name:'i phone 13',brand:'apple',price:4000,category:'Mobile'},
        {name:'i phone 14',brand:'apple',price:5000,category:'Mobile'},
        {name:'i phone 15',brand:'apple',price:6000,category:'Mobile'},
    ])
}

insert()