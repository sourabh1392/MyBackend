const { count } = require("console")
const BookModel = require("../models/bookModel")

// const createBook= async function (req, res) {
//     let data= req.body
//     let savedData= await BookModel.create(data)
//     res.send({msg: savedData})


// const getBooksData = async function (req, res) {
//     let allBooks = await BookModel.find({ authorName: "" })
//     console.log(allBooks)
//     if (allBooks.length > 0) res.send({ msg: allBooks, condition: true })
//     else res.send({ msg: "No books found", condition: false })
// }


// const updateBooks = async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks = await BookModel.findOneAndUpdate(
//         { authorName: "ABC" }, //condition
//         { $set: data }, //update in data
//         { new: true, upsert: true } ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT
//     )

//     res.send({ msg: allBooks })
// }

// const deleteBooks = async function (req, res) {
//     // let data = req.body 
//     let allBooks = await BookModel.updateMany(
//         { authorName: "FI" }, //condition
//         { $set: { isDeleted: true } }, //update in data
//         { new: true } ,
//     )

//     res.send({ msg: allBooks })
// }



// const totalSalesPerAuthor = async function (req, res) {
//     // let data = req.body 
//     let allAuthorSales = await BookModel.aggregate(
//         [
//             { $group: { _id: "$authorName", totalNumberOfSales: { $sum: "$sales" } } },
//             { $sort: { totalNumberOfSales: -1 } }
//         ]
//     )

//     res.send({ msg: allAuthorSales })
// }



// }
// module.exports.deleteBooks = deleteBooks
// module.exports.totalSalesPerAuthor = totalSalesPerAuthor















//<-------------Assignment ------------>


const createBook=function(req,res){
    res.send("My first Data")
}
const getBook=function(req,res){
    res.send("My Second  Data")
}
const updateBook=function(req,res){
    res.send("My Third Data")
}


module.exports.createBook = createBook
module.exports.getBook = getBook
module.exports.updateBook = updateBook