const express = require('express');
const db = require('../db/db');
var gastn = express.Router();
const gastnDB = require('../db/servicesDB')

gastn.get('/', (req, res) => {
    gastnDB.ReadAll(res);  
})
gastn.get('/:id', (req, res) => {
    gastnDB.getById(res, req.params.id);
})
gastn.post('/', function(req, res) {
    gastnDB.addGastn(req.body, res);
})
gastn.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
})
gastn.delete('/:id', function (req, res) {
    gastnDB.delGastn(req.params.id, res);
})

module.exports = gastn;