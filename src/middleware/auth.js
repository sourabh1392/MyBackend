const jwt=require("jsonwebtoken")
const userModel=require("../models/userModel")


//<----Authentication------>
const authenticate = function(req, res, next) {
        const header2=req.headers
        if(!header2["x-auth-token"]) return res.send("Required Header Missing")
        const check=jwt.verify(header2["x-auth-token"],"pass123")
        if(check){
            req.check=check
            next()
        }
        else return res.send("Enter Valid Token")
}


//<------Authorisation------>
const authorise =async function(req, res, next) {
    const userId=req.params.userId
    let user = await userModel.findById(userId);
    if (!user)  return res.send("No such user exists");
    if(req.check.userId==userId){
        req.userId=userId
        next()
    } 
    else res.send("Not authorised user")
}
module.exports.authenticate=authenticate
module.exports.authorise=authorise