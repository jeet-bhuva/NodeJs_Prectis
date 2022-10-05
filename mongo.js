const  { MongoClient }  = require('mongodb');
const url = 'mongodb://localhost:27017';
const database = 'E-comm'
const client = new MongoClient(url);

async function getData()
{
    let result =  await client.connect();
    let db = result.db(database);
    return db.collection('products')
    // let findResult = await collection.find({name:'Phone (1)'}).toArray();
    // console.log(findResult);

} 

module.exports=getData;
 