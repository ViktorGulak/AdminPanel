const sequelize = require("./db_connection");
const { DataTypes: types } = require("sequelize");

const Users = sequelize.define("users", {
  userId: {
    type: types.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  surname: { type: types.STRING, allowNull: false },
  name: { type: types.STRING, allowNull: false },
  patronymic: { type: types.STRING, allowNull: false },
  login: { type: types.STRING, allowNull: false },
  password: { type: types.STRING, allowNull: false },
  email: { type: types.STRING, allowNull: false },
  role: { type: types.STRING, allowNull: false, defaultValue: "Оператор" },
  photo: { type: types.TEXT, allowNull: true },
});

module.exports = Users;
