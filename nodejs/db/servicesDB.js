const db = require('./db');

const readAll = (res) => {
  const sql = "SELECT * FROM gast";
  db.all(sql,(err , data) => {
    if(err){
      console.log(err);
      res.status(400).send(err);
      throw err;
    }
    res.json(data);
  })
}

const getById = (res,id) => {
  const sql = "SELECT * FROM gast WHERE id = ?";
  db.get(sql, [id], (err, row) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
      throw err;
    }
    res.json(row);
  });
}

const addGastn = (data , res) => {
  const {codigo, description, um, precio} = data;
  const sql = "INSERT INTO gast (codigo, description, um, precio) VALUES (?,?,?,?)";

  db.run(sql,[codigo, description, um, precio] , (err) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
      throw err;
    }
    res.json(this.lastID);
  })

}
 
const updGastn = (data , id , res) => {
  const {codigo, description, um, precio} = data;
  const sql = "UPDATE gast SET codigo=? , description=?, um=?, precio=? WHERE id= ?";
  db.run(sql,[codigo, description, um, precio, id] , (err) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
      throw err;
    }
    res.json(this.changes);
  })

}

const delGastn = (id,res) => {
  let sql = "DELETE FROM gast WHERE id= ?";
  db.run(sql,[id], (err) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
      throw err;
    }
    res.json(this.changes);
  })
}

  module.exports = {
    ReadAll: readAll,getById,addGastn,updGastn,delGastn
  };