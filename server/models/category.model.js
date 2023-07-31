// talks to database

// findAll
// push
// delete

import database from "./index.model.js";
import { DataTypes } from "sequelize";

const Category = database.define("Category", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Category.sync(); // TODO unklar

export default Category;
