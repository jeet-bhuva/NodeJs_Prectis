const mongoose = require('mongoose');

// const main = async () => {
     mongoose.connect('mongodb://localhost:27017/E-comm')

    const pro_Schema = mongoose.Schema({
        name : String,
        brand :String,
        price : Number
    });
  

const main = async () =>{    
    const pro_model = mongoose.model('products',pro_Schema);
    let deta = new pro_model({ 
        name:"9 R",
        brand:"One +",         
        price:1200
    })
    let result = await deta.save();
    console.log(result) 
}

    const updatedb =async () => {
         const pro_model = mongoose.model('products',pro_Schema)
         let data = await pro_model.updateOne(
            {name : "i pad"},
            {
                $set:{price:10000}
            }
         )
         console.log(data)
     }

    const deletedb = async () => {
        const pro_model = mongoose.model('products',pro_Schema)
        let data = await pro_model.deleteOne(
            {name : "i pad"}
        )
        console.log(data)
    }
    
    const finddb = async () => {
        const pro_model = mongoose.model('products',pro_Schema)
        let data = await pro_model.find({name : 'i phone 13'})
        console.log(data)
    }

    finddb();