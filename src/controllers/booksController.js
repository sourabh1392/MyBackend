const UserModel= require("../models/booksModel")

const createbook= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

module.exports.createbook= createbook
module.exports.getBooksData= getBooksData