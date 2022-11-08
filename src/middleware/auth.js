const jwt = require("jsonwebtoken")
const userModel = require("../models/userModel")


//<----Authentication------>
const authenticate = function (req, res, next) {
    try {
        const header2 = req.headers
        if (!header2["x-auth-token"]) return res.status(400).send("Required Header Missing")
        const check = jwt.verify(header2["x-auth-token"], "pass123")
         if (check) {
            req.check = check
            next()
        }
        else {
            return res.status(401).send("Enter Valid Token")
        }
    }
    catch (error) {
        res.status(500).send(error.message)
    }
}



//<------Authorisation------>
const authorise = async function (req, res, next) {
    try {
        const userId = req.params.userId
        let user = await userModel.findById(userId);
        if (!user) return res.status(404).send("No such user exists");
        if (req.check.userId == userId) {
            req.userId = userId
            next()
        }
        else res.send("Not authorised user")
    }
    catch (error) {
        res.status(500).send(error.message)
    }
}
module.exports.authenticate = authenticate
module.exports.authorise = authorise