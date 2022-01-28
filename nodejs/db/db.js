const sqlite3 = require('sqlite3').verbose();
const DBSource = './db/mat.db3';

const db = new sqlite3.Database(DBSource,(err) => {
  if(err){
    console.log(err);
    throw err;
  }
  console.log('Connected to the SQLite database.');
})

module.exports = db;

