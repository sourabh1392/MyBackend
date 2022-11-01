const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController = require("../controllers/userController")
const BookController = require("../controllers/bookController")
const commonMW = require("../middlewares/commonMiddlewares")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})










//<-------Assignment ------>


router.get("/createBook", BookController.createBook)
router.get("/getBook", BookController.getBook)
router.get("/updateBook", BookController.updateBook)


module.exports = router;