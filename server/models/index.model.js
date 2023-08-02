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
};
testConnection();

export default database;
