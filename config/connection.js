var mysql = require("mysql");

var source = {
  localhost: {
    port: 3306,
    host: "localhost",
    user: "root",
    password: "dataguard",
    database: "burgers_db"
  }
};

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection(localhost);
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
  }
  console.log("connected as if id: " + connection.threadId);
});

module.exports = connection;