// Import the libraries that you're using
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// Getting the information from my file
const priceConversion = require("./priceConversion.js");

// Create your port
const port = process.env.PORT || 5000;

// Calculate the rate
const calculateRate = (req, res) => {
    const { weight, mail_type } = req.body;
    const roundedWeight = Math.ceil(weight);
    const maxWeight = priceConversion[mail_type].maxWeight;
    const price = roundedWeight > maxWeight ? priceConversion[mail_type][maxWeight].toFixed(2) : priceConversion[mail_type][roundedWeight].toFixed(2)
    const mail_name = priceConversion[mail_type].name;
    res.render('pages/result.ejs', { price, weight, mail_name });
    
}

const app = express()
    .use(express.static(path.join(__dirname, 'public')))
    .use(bodyParser.urlencoded({ extended: true }))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('pages/index'))
    .post('/getRate', calculateRate);

    app.listen(port, () => { console.log(`Listening on port ${port}!`) })

