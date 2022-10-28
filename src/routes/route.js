const express = require('express');
const router = express.Router();

router.post("/test-post", function(req, res) {
    res.send([ 23, 45 , 6,7])
})


router.post("/test-post-2", function(req, res) {
    res.send(  { msg: "hi" , status: true }  )
})

router.post("/test-post-3", function(req, res) {
    let id = req.body.user
    let pwd= req.body.password
    console.log( id , pwd)
    console.log( req.body )
    res.send(  { msg: "hi" , status: true }  )
})



router.post("/test-post-4", function(req, res) {
    let arr= [ 12, "functionup"]
    let ele= req.body.element
    arr.push(ele)
    res.send(  { msg: arr , status: true }  )
})




//<------Assignment------->

const arr=[{
    "name":"manish",
    "dob":"1/10/78",
    "gender":"male"

},
{
    "name":"sourabh",
    "dob":"14//5/01",
    "gender":"male"
}
]
router.post('/test-player', function(req,res){
    const details=req.body;
    const details1=details.name;
    for(let i=0;i<arr.length ;i++)
    {
        if(details1==arr[i].name){
            res.send("Player already exist")
        }  
    }
    arr.push(details)
    console.log(arr)
    res.send("details entered")
})

module.exports = router;