let axios = require("axios")


//<-------------Question 1-------------->

let getdistdata = async function (req, res) {
    try {
        let dist_id = req.query.dist_id
        let date = req.query.date
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${dist_id}&date=${date}`
        }
        let result = await axios(options);
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}



//<--------Question 2--------->

let wether = async function (req, res) {
    try {
        let location = req.query.q
        let id = req.query.appid
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${id}`
        }
        let result = await axios(options)
        let data = result.data
        res.status(200).send({ msg: data, status: true })

    }
    catch (error) {
        res.status(500).send({ msg: error.message })
    }

}

let temp = async function (req, res) {
    try {
        let location = req.query.q
        let id = req.query.appid
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${id}`
        }
        let result = await axios(options)
        let data = result.data.main.temp
        res.status(200).send({ msg: data, status: true })

    }
    catch (error) {
        res.status(500).send({ msg: error.message })
    }
}



let sortedtemp = async function (req, res) {
    try {
        const appid = req.query.appid;
        const cities = ["bengaluru", "mumbai", "delhi", "kolkata", "chennai", "london", "moscow"];
        const temp = [];
        for (let i = 0; i < cities.length; i++) {
            const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=${appid}`);
            temp.push({ city: cities[i], temp: response.data.main.temp });
        }
        temp.sort((a, b) => a.temp - b.temp);
        res.status(200).json(temp);
    } catch (error) {
        res.status(500).json(error);
    }
}



//<--------Question 3-------------->

let Meme = async function (req, res) {
    try {
        let id = req.query.template_id
        let txt0 = req.query.text0
        let txt1 = req.query.text1
        let username = req.query.username
        let password = req.query.password

        let options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${id}&text0=${txt0}&text1=${txt1}&username=${username}&password=${password}`

        }
        let result = await axios(options);
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}



module.exports.getdistdata = getdistdata
module.exports.Meme = Meme
module.exports.wether = wether
module.exports.temp = temp
module.exports.sortedtemp = sortedtemp


