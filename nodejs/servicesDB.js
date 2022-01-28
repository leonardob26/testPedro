const db = require('./db');

const ReadAll = (res) => {
  let sql = "SELECT * FROM user";

  db.all(sql,(err , data) => {
    if(err){
      console.log(err);
      res.status(400).send(err);
      throw err;
    }
    res.send(data);
  })
}

const getById = (res,id) => {
  let sql = "SELECT * FROM user WHERE id = $1";


  db.all(sql,[id],(err , data) => {
    if(err){
      console.log(err);
      res.status(400).send(err);
      throw err;
    }
    data.length === 0 ? res.status(404).send("User not Found!!"):res.status(200).send(data);
  })
}

const CreateUser = (data , res) => {
  const {name,description} = data;
  let sql = "INSERT INTO user (name,description) VALUES ($1,$2)";
  db.all(sql,[name,description] , (err , datA) => {
    if(err){
      console.log(err);
      res.status(400).send(err);
    }
    res.status(200).send("User Created Successfull!!!!");
  })

}
 
const UpdateUser = (data , id , res) => {
  const {name , description} = data;
  let sql = "UPDATE user SET name= $1 , description= $2 WHERE id= $3";
  db.all(sql,[name,description,id],(err , datA) => {
    if(err){
      console.log(err);
      res.status(400).send(err);
      throw err;
    }
    res.send("User Updated successfully!!!");
  })

}

const DeleteUser = (id,res) => {
  let sql = "DELETE FROM user WHERE id= $1";
  db.all(sql,[id], (err,data) => {
    if(err){
      console.log(err);
      throw err;
    }
    res.send("Successfull deleted !!!");
  })
}

  module.exports = {
    ReadAll,getById,CreateUser,UpdateUser,DeleteUser
  };