const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


//<-----Assignment------>
const createUser = async function (req, res) {
  try{
  let data = req.body;
  let savedData = await userModel.create(data);
  res.status(201).send({ msg: savedData });
  }
  catch(error){
    return res.status(500).send(error.message)
  }
};

const loginUser = async function (req, res) {
  try{
  let user1 = req.body.emailId
  let user2= req.body.password
  let user=req.body
  let userdetail = await userModel.findOne({ emailId: user1, password: user2})
  if (!userdetail) return res.status(400).send("UserId or Password is Incorrect")
  let jwttoken = jwt.sign({ userId: userdetail._id.toString(), password: userdetail.password }, "pass123")
  res.setHeader('x-auth-token', jwttoken )
  res.status(200).send({msg:true})
  }
  catch(error){
    return res.status(500).send(error.message)
  }
};

const getUserData = async function (req, res) {
  try{
  const verifyuser=await userModel.findById(req.userId)
  if(!verifyuser) return res.status(404).send("user Not found")
  else return res.status(200).send({status:"verified",data:verifyuser})
  }
  catch(error){
      return res.status(500).error(error.message)
  }
};

const updateUser = async function (req, res) {
  try{
  const data=req.body
  const val=Object.keys(data)
  if(val.length==0) return res.status(400).send("Enter some data to update")
  const updates=await userModel.findOneAndUpdate({_id:req.userId},{$set:data},{new:true})
  return res.status(201).send({msg:"Details Updated"})
  }
  catch(error){
    return res.status(500).send(error.message)
  }
};

const deleteUser =async function(req,res){
  try{
    const deletdata=await userModel.findOneAndUpdate({_id:req.userId},{$set:{isdeleted:true}},{new:true})
    return res.status(200).send({msg:"Details Deleted"})
  }
  catch(error){
    return res.status(500).send(error.message)
  }
};



// const postMessage = async function (req, res) {
//   let message = req.body.message
//   let updatedPosts = user.posts
//   updatedPosts.push(message)
//   let updatedUser = await userModel.findOneAndUpdate({ _id: req.userId }, { posts: updatedPosts }, { new: true })
//   return res.send({ status: true, data: updatedUser })
// }

module.exports.createUser = createUser;
module.exports.loginUser = loginUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;
// module.exports.postMessage = postMessage
