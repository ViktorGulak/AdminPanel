const sequelize = require("./db_connection");
const { DataTypes: types } = require("sequelize");
const getCurrentDate = require("../helpers/getCurrentdate");

const Advertisements = sequelize.define("advertisements", {
  idAdvertisement: {
    type: types.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  title: { type: types.STRING, allowNull: false },
  advertisement: { type: types.TEXT, allowNull: false },
  dateOfCreation: {
    type: types.DATEONLY,
    allowNull: false,
    defaultValue: getCurrentDate(),
  },
  picture: { type: types.STRING, allowNull: true },
});

module.exports = Advertisements;
