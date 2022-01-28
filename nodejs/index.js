const express = require('express')
var app = module.exports = express();
//var app 
const port = 3000

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/gastn', require('./controllers/gastn'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

