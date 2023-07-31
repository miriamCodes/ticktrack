// schema for sequelize

// const fs = require("fs");
// const path = require("path");

import { Sequelize } from "sequelize";

const database = new Sequelize("postgres", "miriam", "", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  operatorsAliases: false,
});

const testConnection = async () => {
  try {
    await database.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
testConnection();

// const Category = require("./Category");
// zyklische abhaengigkeit deshalb  db leer

export default database;
// export not working, db in index.js full, but in category.js empty
