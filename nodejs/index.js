const express = require('express')
var app = module.exports = express();
const port = 3000
const bp = require('body-parser')
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.use('/gastn', require('./controllers/gastn'));


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

