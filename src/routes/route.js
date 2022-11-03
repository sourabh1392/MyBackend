const express = require('express');
const router = express.Router();
const productController= require("../controllers/productController")
const orderController= require("../controllers/orderController")
const userController= require("../controllers/userController")
const commonMW = require ("../middlewares/commonMiddlewares")


router.post("/createUser",commonMW.midd1,userController.createUser)
router.post("/createProduct",commonMW.midd1,productController.createProduct)
router.post("/createOrder",commonMW.midd1,orderController.createOrder)

module.exports = router;