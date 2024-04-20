// Connect MySQL Database
const mysql = require("mysql2");

  let connect_with_mysql = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database : "practice"
  });

  connect_with_mysql.connect((err) => {
    if (err) {
      console.log(`connection error": ${err}`);
    } else {
      console.log("Database Connected With MYSQL");
    }
  });

module.exports = connect_with_mysql;
