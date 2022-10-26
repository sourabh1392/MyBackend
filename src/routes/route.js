const express = require('express');
const router = express.Router();

const BookController= require("../controllers/bookController")



router.post("/createBook", BookController.createBook)

router.get("/booklist", BookController.booklist)

router.post("/getBooksInYear",BookController.getBooksInYear)

router.post("/perticularBooks",BookController.particularBooks)

router.get("/getINRBooks",BookController.getINRBooks)

router.get("/randomBooks",BookController.getRandomBooks)


module.exports = router;
