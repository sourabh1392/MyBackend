const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middleware=require("../middleware/auth")

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

router.get("/getUserData/:userId",middleware.auth, userController.getUserData)

router.put("/updateUser/:userId", middleware.auth, userController.updateUser)

router.delete("/deleteUser/:userId",middleware.auth, userController.deleteUser)

module.exports = router;