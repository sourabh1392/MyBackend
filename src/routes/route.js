const express = require('express');
const router = express.Router();
const UserModel= require("../models/booksModel")
const UserController= require("../controllers/booksController")

router.get("/test-books", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createbook", UserController.createbook)

router.get("/getBooksData", UserController.getBooksData)

module.exports = router;