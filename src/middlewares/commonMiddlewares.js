
const midd1=function(req,res,next){
    const userHeader=req.headers.isfreeappuser
    if(!userHeader) return res.send("The Request Is Missing A Mandatory Header")
    next()
}

module.exports.midd1=midd1
