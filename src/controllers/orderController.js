const { count } = require("console")
const mongoose=require('mongoose')
const orderModel = require("../models/orderModel")
const userModel=require("../models/userModel")
const productModel=require("../models/productModel")

const createOrder = async (req, res) => {
    let data = req.body
    const isFree = req.headers//isfreeappuser

    if (isFree.isfreeappuser === 'true') data.isFreeAppUser = true
    else data.isFreeAppUser = false     //this is for converting values to boolean

    let type = typeof (isFree.isfreeappuser)
    console.log(type)

    let checkUserId = mongoose.Types.ObjectId.isValid(data.userId)  //return valid userId or not
    let checkProductId = mongoose.Types.ObjectId.isValid(data.productId)   //return valid productId or not

    if (!data.userId) return res.send("userId  is not written")    //check userId is present or not
    else if (checkUserId == false) return res.send("userId  is incorrect")  //check user entered valid userId or not

    if (!data.productId) return res.send("productId is not written")  //check productId present or not
    else if (checkProductId == false) return res.send("productId  is incorrect")  //check user entered valid productId or not


    let user = await userModel.findById(data.userId)
    if (user == null) return res.send("user not found") //checking user

    if (user.isFreeAppUser != data.isFreeAppUser) return res.send("isFreeAppUser value is different")
    //to check the users isFreeAppUser and header isFreeAppUser value are same

    let product = await productModel.findById(data.productId)
    if (product == null) return res.send("product not found")   //checking product

    const productPrize = product.price

    if (user.isFreeAppUser == false) {
        if (user.balance >= productPrize) {
            await userModel.findByIdAndUpdate(data.userId, { $inc: { balance: -productPrize } })
            data.amount = productPrize
            const orderDetails = await orderModel.create(data)
            res.send(orderDetails)
        }
        else return res.send("you don't have money.")
    } 
    else {
        data.amount = 0
        const orderDetails = await orderModel.create(data)
        res.send(orderDetails)
    }
}

module.exports.createOrder=createOrder