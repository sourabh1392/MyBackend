const express = require('express');
const router = express.Router();///test-you
const underscore = require('underscore')
const lodash=require('lodash')
//importing a custom module
const xyz = require('../logger')
//importing external package
const abc=require('../logger/logger1')
const def=require('../util/helper')
const pqr=require('../validator/formattor')


// router.get('/test-me', function (req, res) {
//     //Calling the components of a different custom module
//     console.log("Calling my function ",xyz.myFunction())
//     console.log("The value of the constant is ",xyz.myUrl)
//     //Trying to use an external package called underscore
//     let myArray = ['Akash', 'Pritesh', 'Sabiha']
//     let result = underscore.first(myArray)
//     console.log("The result of underscores examples api is : ", result)
    
//     res.send('My first ever api!')

//     //To be tried what happens if we send multiple response
//     //res.send('My second api!')
// });

//---------Question1--------------

router.get('/logger',function (req ,res){
    console.log("My first function",abc.welcome())
})


//-------------Question2-----------

router.get('/date',function(req ,res){
    console.log("My second function",def.dateandmonth())
})


//-----------Question3-----------------

router.get('/validator',function(req,res){
    console.log("My third Function",pqr.MyFunction())
})



//----------Question4---------------
router.get('/test-me',function(req,res){
    const arr4=["January","February","MArch","April","May","June","July","August","September","Octomber","November","December"]
    const arr1=lodash.chunk(arr4,4)
    console.log(arr1)


    const odd=[1,3,5,7,9,11,13,15,17,19]
    const odd1=lodash.tail(odd,9)
    console.log(odd1)
    const a=[2,5,1,6]
    const a1=[2,3,4,9]
    const a2=[9,7,8,2]
    const a3=[2,8,4,0]
    const a4=[1,6,3,4]
    const ans=lodash.union(a,a1,a2,a3,a4)
    console.log(ans)


    const arr=[['horror','The Shining'] , ['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]
    const result=lodash.fromPairs(arr)
    console.log(result)



})
module.exports = router;



