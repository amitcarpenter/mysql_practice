const express = require("express");
const {
  create_database_in_mysql,
  drop_database_in_mysql,
  create_table_in_database,
  drop_table_from_database,
} = require("../controllers/databaseController");

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post("/create-database", create_database_in_mysql);

router.delete("/delete-database", drop_database_in_mysql);

router.post("/create-table", create_table_in_database);

router.delete("/delete-table", drop_table_from_database);



module.exports = router;
