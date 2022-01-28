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
gastn.post('/add', (req, res) => {
    let sql = "SELECT * FROM gast WHERE codigo= $1";
    console.log(req.body.codigo);
    //gastnDB.getByName(req.body.codigo,res);
    db.get(sql,[req.body.codigo],(err , data) => {
        if(err){
          console.log(err);
          throw err;
        }
         data?res.status(400).send("Ya existe"):gastnDB.addGastn(req.body, res);
    })    
    //;
})
gastn.put('/edit/:id', (req, res) => {
    let sql = "SELECT * FROM gast WHERE id = $1";
    db.get(sql,[req.params.id],(err , data) => {
        if(err){
            console.log(err);
            res.status(500).send(err);
            throw err;
        }

        data?gastnDB.updGastn(req.body,req.params.id,res):res.status(404).send("User Not Found !!");

    })
    //gastnDB.updGastn(req.body,req.params.id, res);
})
gastn.delete('/delete/:id', (req, res) => {
    let sql = "SELECT * FROM gast WHERE id = $1";
    db.get(sql,[req.params.id],(err , data) => {
        if(err){
            console.log(err);
            res.status(500).send(err);
            throw err;
        }

        data?gastnDB.delGastn(req.params.id, res):res.status(404).send("User Not Found !!");

    })
    
})

module.exports = gastn;