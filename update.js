const getData = require('./mongo')

const updatedeta =async ()=>{
    let deta = await getData();
    let result =await deta.updateOne(
        {name:'i pad'},{$set:{category:'Tablet'}}
    )
    console.log(result)
}

updatedeta()