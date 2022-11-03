const { count } = require("console")
const productModel = require("../models/productModel")


const createProduct=async function(req,res){
    const product=req.body
    const details=await productModel.create(product)
    res.send({msg:details})
}

module.exports.createProduct= createProduct
