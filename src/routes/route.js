const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/getUserData/:userId", userController.getUserData)

router.put("/updateUser/:userId", userController.updateUser)

router.delete("/deleteUser/:userId",userController.deleteUser)

module.exports = router;