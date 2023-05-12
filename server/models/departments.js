const sequelize = require("./db_connection");
const { DataTypes: types } = require("sequelize");

const Departments = sequelize.define("departments", {
  departmentId: {
    type: types.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  department: { type: types.STRING, allowNull: false },
  address: { type: types.STRING, allowNull: false },
  city: { type: types.STRING, allowNull: false },
});

module.exports = Departments;
