// talks to database

// findAll
// push
// delete

const database = require("./index");
const { DataTypes } = require("sequelize");

const Category = database.define("Category", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Category.sync(); // TODO unklar

module.exports = Category;
