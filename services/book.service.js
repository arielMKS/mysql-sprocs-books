// const mssql = require("../mssql");
// const TYPES = require("tedious").TYPES;

const mysql = require("mysql"); // mysql dont support promises, mysql2 does

// First you need to create a connection to the db
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Password1",
  database: "booksdb"
});

connection.connect(err => {
  if (err) {
    console.log("Error connecting to Db");
    return;
  }
  console.log("Connection established");
});

const getAll = () => {
  console.log("Service get all");

  connection.query("CALL GetAllBooks()", function(err, rows) {
    if (err) {
      console.log(err => console.log("Error", err));
      return null;
    }

    console.log("Data received from Db:\n");
    console.log(rows[0]);
    return rows[0];
  });

  //   connection.query("SELECT * FROM books", (err, rows) => {
  //     if (err) throw err;

  //     console.log("Data received from Db:\n");
  //     console.log(rows);
  //   });
};

module.exports = {
  getAll: getAll
};
