const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middController=require("../middleware/auth")


router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

router.get("/getUserData/:userId",  middController.authenticate, middController.authorise,userController.getUserData)

router.put("/updateUser/:userId",middController.authenticate, middController.authorise, userController.updateUser)

router.delete('/deleteUser/:userId',middController.authenticate, middController.authorise, userController.deleteUser)

// router.post("/users/:userId/posts",middController.authenticate, middController.authorise, userController.postMessage)


module.exports = router;
