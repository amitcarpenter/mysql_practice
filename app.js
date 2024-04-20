require("dotenv").config();
const express = require("express");
require("./config/database");
const router = require("./src/routes/databaseRoutes");

PORT = process.env.PORT;

const app = express();

app.use("/", router);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.listen(PORT, () => {
  console.log(`server is working on ${PORT}`);
});
