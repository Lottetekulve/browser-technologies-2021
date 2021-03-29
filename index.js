const express = require("express")
const path = require('path');
require('dotenv').config();

// require("./test/connection.js")
var bodyParser = require('body-parser')
const makeShirt = require("./models/tshirtdata");

const app = express()
const PORT = process.env.PORT || 3001;


// Tell express to use a 'static/public' folder
// If the url matches a file it will send that file
app.use(express.static(path.join(__dirname, "static/public")));
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({ extended: false }));



const mongoose = require('mongoose');

//ES6 promise
mongoose.Promise = global.Promise
//connect to db before running tests

//connect to mongocb
mongoose.connect('mongodb://localhost/browserTechDB', { useNewUrlParser: true, useUnifiedTopology: true })

mongoose.connection.once('open', function(){
    console.log('Connection has been made')
}).on('error', function(error){
    console.log("connection error", error)
})





// app.get('/', function (req, res) {
//     res.render('index')
// });

app.get('/shirt', function (req, res) {
    res.render('shirt');
})

app.post('/', (req,res) =>{

    var tshirt = new makeShirt({
        name: req.body.tsname,
        text: req.body.name,
        color: req.body.color,
        font: req.body.font,
        size: req.body.size,
        style: req.body.style,
        colortext: req.body.color2,
        fit: req.body.fit
    });


    tshirt.save()
    .then(function(){
        res.render('index' ,{ 
            name: req.body.tsname,
            text: req.body.name,
            color: req.body.color,
            font: req.body.font,
            size: req.body.size,
            style: req.body.style,
            colortext: req.body.color2,
            fit: req.body.fit })
    })

    .catch(function(error){
        res.send("it didn't work")
        console.log(error)
    })
});


app.post('/shirt/order', (req,res) =>{

    var tshirt = new makeShirt({
        name: req.body.tsname,
        text: req.body.name,
        color: req.body.color,
        font: req.body.font,
        size: req.body.size,
        style: req.body.style,
        colortext: req.body.color2,
        fit: req.body.fit
    });


    tshirt.save()
    .then(function(){
        res.render('order' ,{ 
            name: req.body.tsname,
            text: req.body.name,
            color: req.body.color,
            font: req.body.font,
            size: req.body.size,
            style: req.body.style,
            colortext: req.body.color2,
            fit: req.body.fit })
    })

    .catch(function(error){
        res.send("it didn't work")
        console.log(error)
    })
});




app.get('/signup', function (req, res) {
    res.render('signup');
})


app.listen(PORT, () => {
    console.log(`App is launched on http://localhost:${PORT}`)
  });


