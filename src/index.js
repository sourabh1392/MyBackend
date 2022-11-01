const express = require('express');
const bodyParser = require('body-parser');
const IP = require('ip')
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://SourabhPatil1392:Patils1392@newproject.orvb1ly.mongodb.net/Sourabh", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))





//<-------Assignment------>
const date1 = new Date
app.use('/',
    function (req, res, next) {
        console.log(date1, IP.address(), req.path)
        next()
    }
)





app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
