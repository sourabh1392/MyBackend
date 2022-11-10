const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")




router.get("/cowin/getdistdata",CowinController.getdistdata)

router.post("/getMemes",CowinController.Meme)

router.get("/weather",CowinController.wether)

router.get("/wether/temp",CowinController.temp)

router.get("/sortedTemp",CowinController.sortedtemp)





module.exports = router;