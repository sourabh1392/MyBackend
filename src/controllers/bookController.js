const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const publisherModel = require("../models/publisherModel")
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId


//<-------Question 3------->


const createBook = async function (req, res) {
    let book = req.body
    let checkAuthor = ObjectId.isValid(book.author_id)
    let checkPublisher = ObjectId.isValid(book.publisher_id)


    console.log(checkAuthor)
    console.log(checkPublisher)


    if (!book.author_id) return res.send("Author_id not Present")
    else if (checkAuthor == false) return res.send("author_id is incorrect")
    let authorId = await authorModel.findById(book.author_id)
    if (authorId == null) return res.send("Author not found")


    if (!book.publisher_id) return res.send("Please enter Publisher_Id")
    else if (checkPublisher == false) return res.send("Publisher_id is incorrect")
    let publisherId = await publisherModel.findById(book.publisher_id)
    if (publisherId == null) return res.send("Publisher not found")


    let bookCreated = await bookModel.create(book)
    res.send(bookCreated)


}



//<--------Question 4---------->


const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate(['author_id', 'publisher_id'])
    res.send({ data: specificBook })

}



//<---------Question 5---------->

const addNewKey = async function (req, res) {

    const publisher = req.body
    const name = publisher.name
    const booksData = await bookModel.updateMany({ $set: { isHardCover: 0 } }, { new: true })
    const publisherId = await publisherModel.find({ name: { $in: name } }).select({ _id: 1 })
    const changeCover = await bookModel.find({ publisher: { $in: publisherId } }).updateMany({ $set: { isHardCover: true } })
    res.send(changeCover)
}


const priceIncrease = async function (req, res) {

    const authors = await authorModel.find({ rating: { $gte: 3.5 } }).select("_id:1")
    const updatebooks = await bookModel.updateMany({ authorId: { $in: authors } }, { $inc: 20 })
    res.send(updatebooks)

}


module.exports.createBook = createBook
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.addNewKey = addNewKey
module.exports.priceIncrease = priceIncrease