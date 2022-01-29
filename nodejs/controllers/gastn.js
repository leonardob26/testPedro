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
<<<<<<< HEAD
gastn.post('/', (req, res) => {
    gastnDB.addGastn(req.body, res);
})
gastn.put('/:id', (req, res) => {
   gastnDB.updGastn(req.body,req.params.id,res)
    //gastnDB.updGastn(req.body,req.params.id, res);
})

gastn.delete('/:id', (req, res) => {
=======
gastn.post('/', function(req, res) {
    gastnDB.addGastn(req.body, res);
})
gastn.put('/', function (req, res) {
    gastnDB.updGastn(req.body, res);
})
gastn.delete('/:id', function (req, res) {
>>>>>>> 1a9ab9d0c1f61bb862955538c7c79bba9e1304be
    gastnDB.delGastn(req.params.id, res);
})

module.exports = gastn;