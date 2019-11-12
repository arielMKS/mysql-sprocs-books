const express = require("express");

const app = express();
const mysql = require("mysql");
const config = require("./config/config.json").development;
const routes = require("./routes");
const PORT = process.env.PORT || 3001;

// console.log("CONFIG.JSON", config.host);

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// app.get("/api/books", (req, res) => {
//   console.log("inside /api/books");
//   res.json({ success: true });
// });

// Add routes for API
app.use(routes);

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Password1",
  database: "booksdb"
});
connection.connect(function(err) {
  if (err) {
    return console.error("error: " + err.message);
  }

  console.log("Connected to the MySQL server.");
});

// THIS WORKS
// Connect to the JawsDB MySQL
// let connection = mysql.createConnection({
//   host: config.host,
//   user: config.username,
//   password: config.password,
//   database: config.database
// });
// connection.connect(err => {
//   if (err) {
//     return console.error("error" + err.message);
//   }
//   console.log("Connected to the MySQL server.");
// });

let sql = "select * from books";
connection.query(sql, (error, results, fields) => {
  if (error) {
    return console.error(error.message);
  }
  // console.log("RESULTS",results);
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
