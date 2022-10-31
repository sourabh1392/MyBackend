const publisherModel=require('../models/publisherModel')


//<------Question 2------>

const createPublisher= async function(req,res){
    const publisher=req.body
    const publisherCreated= await publisherModel.create(publisher)
    res.send({data:publisherCreated})
}


module.exports.createPublisher=createPublisher
