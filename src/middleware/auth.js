const jwt=require("jsonwebtoken")

const auth=async (req,res,next)=>{
    const header=req.headers
    if(!header["x-auth-token"]) return res.send("Required Header Missing")
    const check=await jwt.verify(header["x-auth-token"],"pass123")
    if(!check) return res.send("Enter valid token")
    next()
}
module.exports.auth=auth