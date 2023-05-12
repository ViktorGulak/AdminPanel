const sequelize = require("./db_connection");
const { DataTypes: types } = require("sequelize");
const getCurrentDate = require("../helpers/getCurrentdate");

const Tasks = sequelize.define("tasks", {
  taskId: {
    type: types.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  task: { type: types.TEXT, allowNull: false },
  dateOfCreation: {
    type: types.DATEONLY,
    allowNull: false,
    defaultValue: getCurrentDate(),
  },
  executeTo: { type: types.DATEONLY, allowNull: false },
  done: { type: types.BOOLEAN, allowNull: false, defaultValue: false },
  important: { type: types.BOOLEAN, allowNull: false },
});

module.exports = Tasks;
