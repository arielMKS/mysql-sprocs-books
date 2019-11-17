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
  // CREATE BOOK
  CreateBook: function(author = "", title = "", sypnopsis = "", cb) {
    console.log("Utils create book");

    // THIS WORKS
    let query_str = "CALL CreateBook(?,?,?, @OUTPUTPARAM); SELECT @OUTPUTPARAM"; //
    con.query(query_str, [author, title, sypnopsis], function(err, rows) {
      if (err) throw err;
      console.log("OUTPUTPARAM", rows[1][0]["@OUTPUTPARAM"]);
      cb(rows);
    });

    // THIS WORKS
    // let query_str = "CALL CreateBook(?,?,?, @OUTPUTPARAM); SELECT @OUTPUTPARAM"; //
    // return con
    //   .promise()
    //   .query(query_str, [author, title, sypnopsis])
    //   .then(([rows, fields]) => {
    //     console.log("ROWS", rows[1][0]["@OUTPUTPARAM"]); // access id of new record
    //     // return rows[1][0]["@OUTPUTPARAM"]; // return id of new record
    //     cb(rows);
    //   })
    //   .catch(err, console.log("Ariel", err));
  }
};
