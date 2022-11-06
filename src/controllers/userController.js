const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


//<-----Assignment------>
const createUser = async function (req, res) {
  let data = req.body;
  let savedData = await userModel.create(data);
  res.send({ msg: savedData });
};

const loginUser = async function (req, res) {
  let user1 = req.body.emailId
  let user2= req.body.password
  let user=req.body
  let userdetail = await userModel.findOne({ emailId: user1, password: user2})
  if (!userdetail) return res.send("UserId or Password is Incorrect")
  let jwttoken = jwt.sign({ userId: userdetail._id.toString(), password: userdetail.password }, "pass123")
  res.setHeader('x-auth-token', jwttoken )
  res.send({msg:true})
  
};

const getUserData = async function (req, res) {
  const verifyuser=await userModel.findById(req.userId)
  if(!verifyuser) return res.send("Please enter a valid user")
  else return res.send({status:"verified",data:verifyuser})
};

const updateUser = async function (req, res) {
  const data=req.body
  const update=await userModel.findOneAndUpdate({_id:req.userId},{$set:data},{new:true})
  return res.send({msg:"Details Updated"})
};

const deleteUser =async function(req,res){
    const deletdata=await userModel.findOneAndUpdate({_id:req.userId},{$set:{isdeleted:true}},{new:true})
    return res.send({msg:"Details Deleted"})
}



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
