const express = require('express');
const db = require('../db/db');
var gastn = express.Router();

//var app 
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
gastn.put('/', function (req, res) {
    gastnDB.updGastn(req.body, res);
})
gastn.delete('/:id', function (req, res) {
    gastnDB.delGastn(req.params.id, res);
})

module.exports = gastn;