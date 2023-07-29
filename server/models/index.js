// schema for sequelize

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const db = {};

const sequelize = new Sequelize("postgres", "miriam", "", {
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

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
testConnection();
module.exports = sequelize;
