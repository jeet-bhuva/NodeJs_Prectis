const getData = require('./mongo')

const deletedeta =async ()=>{
    let deta = await getData();
    let result = await deta.deleteOne(
        {name:'i phone 14'}
    )
    console.log(result)
}
deletedeta();