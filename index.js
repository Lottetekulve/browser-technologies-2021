const express = require("express")
const path = require('path');
var bodyParser = require('body-parser')
const app = express()
const PORT = process.env.PORT || 3001;


// Tell express to use a 'static/public' folder
// If the url matches a file it will send that file
app.use(express.static(path.join(__dirname, "static/public")));
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', function (req, res) {
    res.render('index')
});

app.get('/shirt', function (req, res) {
    res.render('shirt');
})

app.get('/shirt/order', function (req, res) {
    res.render('order');
})

app.get('/signup', function (req, res) {
    res.render('signup');
})


app.listen(PORT, () => {
    console.log(`App is launched on http://localhost:${PORT}`)
  });


