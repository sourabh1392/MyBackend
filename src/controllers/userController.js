const jwt=require('jsonwebtoken')
const userModel = require("../models/userModel")

const createUser= async (req,res)=>{
    let user=req.body
    const create=await userModel.create(user)
    return res.send({msg:"User Created",data:create})
}

const loginUser=async (req,res)=>{
    let user1=req.body
    let userdetail=await userModel.findOne({emailId:user1.emailId,password:user1.password})
    if(!userdetail) return res.send("Please enter valid user")
    let jwttoken=await jwt.sign({userId:user1._id,password:user1.password},"pass123")
    console.log(jwttoken)
    return res.send({status: true, data:{token:jwttoken}})
}

const getUserData=async (req,res)=>{
    const userId=req.params.userId
    const verifyuser=await userModel.findById(userId)
    if(!verifyuser) return res.send("Please enter a valid user")
    const header=req.headers
    if(!header["x-auth-token"]) return res.send("Required Header Missing")
    const check=await jwt.verify(header["x-auth-token"],"pass123")
    if(!check) return res.send("Enter valid token")
    res.send({status:"verified"})
}   

const updateUser=async(req,res)=>{
    const user2=req.params.userId
    const data=req.body
    const update=await userModel.findOneAndUpdate({userId:user2},{$set:data},{new:true})
    return res.send({msg:"Details Updated"})
}

const deleteUser=async (req,res)=>{
    const user3=req.params.userId
    const deletdata=await userModel.findOneAndUpdate({userId:user3},{$set:{isdeleted:true}},{new:true})
    return res.send({msg:"Details Deleted"})
}

module.exports.createUser=createUser
module.exports.loginUser=loginUser
module.exports.getUserData=getUserData
module.exports.updateUser=updateUser
module.exports.deleteUser=deleteUser



