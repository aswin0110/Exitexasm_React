const mongoose = require('mongoose')
require('dotenv').config();



mongoose.connect(`mongodb+srv://aswinkannur1:Aswinkannur01@cluster0.amfjccq.mongodb.net/Exitexam_React?retryWrites=true&w=majority`)
.then(()=>{
    console.log('MONGODB CONNECTED');
})
.catch(err=>console.log(err))

const Schema = mongoose.Schema 

const templateModel = new Schema({
    cuisines:String, 
    image:String,
    title:String,
    duration:Number,
    serving:Number


})

var cusineModel = mongoose.model('Exitexam_React',templateModel)

module.exports = cusineModel