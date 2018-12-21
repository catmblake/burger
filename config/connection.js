// Setting up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "burgers_db"
});

// Connecting to the database.
connection.connect(function(err) {
  if (err) {
    console.error(`Error connecting: ${err.stack}`);
    return;
  }
  console.log(`Connected as ID ${connection.threadId}`);
});

// Export connection for orm to use.
module.exports = connection;