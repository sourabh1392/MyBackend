const userModel = require("../models/userModel")

const createUser= async function(req,res){
    let user=req.body
    const create=await userModel.create(user)
    return res.send({msg:create})
}
module.exports.createUser=createUser



