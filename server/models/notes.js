const sequelize = require("./db_connection");
const { DataTypes: types } = require("sequelize");
const getCurrentDate = require("../helpers/getCurrentdate");

const Notes = sequelize.define("notes", {
  noteId: {
    type: types.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  note: { type: types.TEXT, allowNull: false },
  dateOfCreation: {
    type: types.DATEONLY,
    allowNull: false,
    defaultValue: getCurrentDate(),
  },
  done: { type: types.BOOLEAN, allowNull: false, defaultValue: false },
});

module.exports = Notes;
