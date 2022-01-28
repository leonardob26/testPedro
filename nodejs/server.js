const express = require('express');
const app = express();
const query = require('./servicesDB');

const HTTP_PORT = 3000 || process.env.HTTP_PORT;

var bodyParser = require("body-parser");
const db = require('./db');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(HTTP_PORT , () => console.log(`Server lisgtening on ${HTTP_PORT} port!!`));

app.get("/",(req,res) => {
  res.send("Hello Moto!!");
})

app.get("/get" , (req,res) => {
  query.ReadAll(res);
})

app.get("/api/user/:id",(req , res) => {
  query.getById(res,req.params.id);
})

app.post("/api/post/", (req , res) => {
  query.CreateUser(req.body,res);
})

app.put("/api/update_user/:id", (req , res) => {
  let sql = "SELECT * FROM user WHERE id = $1";
  db.all(sql,[req.params.id],(err,data) => {
    if(err){
      console.log(err);
      throw err;
    }
    data.length === 0?
      res.status(404).send("User Not Found"):
      query.UpdateUser(req.body,req.params.id,res);
  })
})

app.delete("/api/delete_user/:id" , (req,res) => {
  query.DeleteUser(req.params.id,res);
})