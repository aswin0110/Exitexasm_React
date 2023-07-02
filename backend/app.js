const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

PORT = 3005

const path = require('path'); 

const cusineModel = require('./model/cusineModel')



// upload data
app.post('/api/cusine', async (req,res)=>{
     
    

    let search = cusineModel.findOne({title:req.body.title})
    if(search){
        try {
            let data = new cusineModel(req.body)
            await data.save()
            console.log(data);
            res.status(200).json({ status:'1' });
    
        
        } catch (error) {
            console.log(error.message);
        }
    }
    else{
        res.status(409).json({ status:'2' });


    }
})

// get data by cusines : when we select: Indian or Italian available, also get all datas: Indian, Italian
app.get('/api/cusine', async (req,res)=>{
    try {

        let data = req.body.cusines
        let findData = await cusineModel.find()
        res.status(200).json(findData)
        
    } catch (error) {
        console.log(error.message)
        
    }
})


// delete data by id
app.delete('/api/cusine/:id', async (req,res)=>{
    
    try {
        let id = req.params.id
        let deleteData = await cusineModel.findOneAndDelete({_id:id})
        res.status(200).json({status:'1'})
    } catch (error) {
        console.log(error.message)
    }
}) 

// update data
app.put('/api/cusine/:id', async (req,res)=>{

    try {
        let data = req.params.id
        console.log(data);
        let updataData = await cusineModel.findByIdAndUpdate({_id:data}, req.body)
        updataData.save()
        res.status(200).json({status:'1'})
    } catch (error) {
        console.log(error.message);
        
    }

})


app.use(express.static(path.join(__dirname,'/build'))); 

app.get('/*', function(req, res) { 
res.sendFile(path.join(__dirname ,'/build/index.html')); }); 






app.listen(PORT, ()=>{
    console.log(`__________SERVER RUN PORT: ${PORT}__________`);
})