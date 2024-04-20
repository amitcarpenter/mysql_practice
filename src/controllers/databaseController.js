const database = require("../../config/database");

const create_database_in_mysql = (req, res) => {
  try {
    let dbname = req.body.dbname;
    let databaseCreateQuery = `CREATE DATABASE ${dbname}`;

    database.query(databaseCreateQuery, (err) => {
      if (err) throw err;
      console.log(`${dbname} is Created SuccessFully`);
      res.status(201).json({
        sucess: true,
        message: `database: ${dbname} is created Success Fully`,
      });
    });
  } catch (error) {
    console.log(error);
  }
};

const drop_database_in_mysql = (req, res) => {
  try {
    let { dbname } = req.body;
    let drop_query = `DROP DATABASE ${dbname}`;
    database.query(drop_query, (err) => {
      if (err) throw err;
      res.status(200).json({
        succes: true,
        message: `database : ${dbname} is drop success fully`,
      });
    });
  } catch (error) {
    console.log(error);
  }
};

const create_table_in_database = (req, res) => {
  try {
    let { table_name } = req.body;
    let create_table_query = `CREATE TABLE ${table_name} (name VARCHAR(255) , email VARCHAR(255) , password VARCHAR(255), number INT(13))`;

    database.query(create_table_query, (err) => {
      if (err) throw err;
      res.status(201).json({
        success: true,
        message: `Table : ${table_name} create success fully`,
      });
    });
  } catch (error) {
    console.log(error);
  }
};

const drop_table_from_database = (req, res) => {
  try {
    let { table_name } = req.body;
    let drop_table_query = `DROP TABLE ${table_name}`;

    database.query(drop_table_query, (err) => {
      if (err) throw err;
      res
        .status(200)
        .json({
          success: true,
          message: `Table : ${table_name} is Deleted Success fully`,
        });
    });
  } catch (error) {}
};

module.exports = {
  create_database_in_mysql,
  drop_database_in_mysql,
  create_table_in_database,
  drop_table_from_database,
};
