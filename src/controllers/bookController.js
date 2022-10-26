const { count } = require("console")
const bookModel = require("../models/bookModel")




//<-------Assignment---------->


//To create a new entry
const createBook= async function (req, res) {
    let data= req.body
    let savedBook= await bookModel.create(data)
    res.send({msg: savedBook})
}

//Give book with BookName and Authorname
const booklist=async function(req,res){
    let allUsers= await bookModel.find().select({bookName:1,authorName:1,_id:0})
    res.send({msg: allUsers})
}


//Take year as input in post and give list of books published that year
const getBooksInYear=async function(req,res){
    let years=req.body.year
    let bookInYear=await bookModel.find({year:{$eq:years}})
    res.send({msg:bookInYear})
}

//Take any input and use it as a condition to fetch books that satisfy that condition
const particularBooks=async function(req, res) {
    let anyBook=req.body
    let bookData=await bookModel.find(anyBook); 
    res.send({bookData})
}

//Request to return all books who have an Indian price tag of “100INR” or “200INR” or “500INR” 
const getINRBooks=async function(req,res){
    let allBooks=await bookModel.find({"price.indianPrice":{$in:["100INR","200INR","500INR"]}})
    res.send({msg:allBooks})
}

// Returns books that are available in stock or have more than 500 pages 
const getRandomBooks=async (req,res)=>{
    let randomBook=await bookModel.find({$or:[{stockAvailable:true},{totalPages:{$gt:500}}]})
    res.send({msg:randomBook})
}

module.exports.createBook= createBook
module.exports.booklist= booklist
module.exports.getBooksInYear=getBooksInYear
module.exports.particularBooks=particularBooks
module.exports.getINRBooks=getINRBooks
module.exports.getRandomBooks=getRandomBooks
