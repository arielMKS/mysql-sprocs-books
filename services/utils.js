const mysql = require("mysql2");

// create the connection
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "booksdb",
  password: "Password1",
  multipleStatements: true // IMPORTANT!! SO SPROCS CAN PASS IN AND OUT PARAMETERS
});

module.exports = {
  //  POST
  post: function(author, title, sypnopsis) {
    let query_str = "CALL CreateBook(?,?,?, @OUTPUTPARAM); SELECT @OUTPUTPARAM"; //
    return con
      .promise()
      .query(query_str, [author, title, sypnopsis])
      .then(([rows, fields]) => {
        return rows[1][0]["@OUTPUTPARAM"]; // return the new record id
      });
    //   .catch(err, console.log("Ariel", err));
  },

  // GET ALL
  getAll: function() {
    let query_str = "CALL GetAllBooks()";
    return con
      .promise()
      .query(query_str)
      .then(([rows, fields]) => {
        return rows[0];
      });
  },

  // GET BY ID
  getById: function(id) {
    let query_str = "CALL GetById(?)";
    return con
      .promise()
      .query(query_str, [id])
      .then(([rows, fields]) => {
        return rows[0][0]; // return one record found, it's an object
      });
  },

  // DELETE BOOK
  del: function(id) {
    let query_str = "CALL DeleteBook(?)";
    return con
      .promise()
      .query(query_str, [id])
      .then(([rows, fields]) => {
        return rows;
      });
  },

  // UPDATE BOOK
  update: function(id, author, title, synopsis) {
    let query_str = "CALL UpdateBook(?,?,?,?)";
    return con
      .promise()
      .query(query_str, [id, author, title, synopsis])
      .then(([rows, fields]) => {
        return rows;
      });
  }
};
