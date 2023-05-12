const { Sequelize } = require("sequelize");

// Подключение к БД.
module.exports = new Sequelize(
  process.env.DB_NAME,
  process.env.USER_NAME,
  process.env.DB_PASSWORD,
  {
    dialect: "mysql",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    define: {
      timestamps: false,
    },
  }
);
