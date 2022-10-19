const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});

router.get('/students', function (req, res) {
    console.log("The path params in the request are : ", req.params)
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})


// Example 1 for path params
router.get('/students/:studentName', function (req, res) {
    // ':' denotes that the following part of route is a variable
    // The value of this variable is what we are sending in the request url after /students
    // This value is set in the form of an object inside req.params
    // The object contain key value pairs
    // key is the variable in the route
    // value is whatever dynamic value sent in the request url
    let myParams = req.params

    // params attribute is fixed in a request object
    // params contains the path parameters object
    console.log("The path params in the request are : ", myParams)
    res.send('The full name is ' + myParams.studentName)
})

// Example 2 for path params
router.get('/student-details/:name', function (req, res) {
    let requestParams = req.params
    console.log("This is the request ", requestParams)
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    res.send('Dummy response')
})









//<------   Question1   --------->


router.get('/movies', function (req, res) {
    let arr = ["Lakshya", "Shershaah", "Border", "LOC Kargil"]
    res.send(arr)
})


//<---------   Question2  ------->


router.get('/movies2/:indexNumber', function (req, res) {
    let arr1 = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    let para = req.params.indexNumber
    res.send(arr1[para])
})


//<---------   Question3   ---------->

router.get('/movies3/:indexNumber', function (req, res) {
    let arr1 = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    let para1 = req.params.indexNumber
    if (para1 >= arr1.length) {
        res.send("enter valid value")
    }
    else {
        res.send(arr1[para1])
    }

});


//<---------   Question 4 & 5    -------->

router.get('/films1', function (req, res) {
    let film = [{
        'id': 1,
        'name': 'The Shining'
    }, {
        'id': 2,
        'name': 'Incendies'
    }, {
        'id': 3,
        'name': 'Rang de Basanti'
    }, {
        'id': 4,
        'name': 'Finding Nemo'
    }]
    res.send(film)

})


router.get('/films2/:filmId', function (req, res) {
    let film1 = [{
        'id': 1,
        'name': 'The Shining'
    }, {
        'id': 2,
        'name': 'Incendies'
    }, {
        'id': 3,
        'name': 'Rang de Basanti'
    }, {
        'id': 4,
        'name': 'Finding Nemo'
    }]

    let res5 = req.params.filmId
    for (let i = 0; i < film1.length; i++) {
        if (film1[i].id == res5) {
            return res.send(film1[i])
        }
    }
    return res.send("No Movie found")
})



//<--------------New Important Examples----------->



router.get('/test-arr', function (req, res) {
    let arr5 = [1, 2, 4, 5, 6, 7]
    let n = (arr5[arr5.length - 1]) //n stores last element
    let sum9 = arr5.reduce((a, b) => a + b)
    let sum1 = n * (n + 1) / 2
    let missingnum = sum1 - sum29
    console.log(missingnum)
    res.send("Mission Done")
})




router.get('/test-arr2', function (req, res) {
    let arr6 = [33, 35, 36, 37, 38]
    let n2 = arr6[arr6.length - 1]
    let sum = arr6.reduce((a, b) => a + b)
    let sum2 = (arr6.length + 1) * (arr6[0] + arr6[arr6.length - 1]) / 2
    let res = sum2 - sum
    console.log(res)
    res.send("Mission Completed")
})



module.exports = router;