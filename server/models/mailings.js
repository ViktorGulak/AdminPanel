const sequelize = require("./db_connection");
const { DataTypes: types } = require("sequelize");
const getCurrentDate = require("../helpers/getCurrentdate");

const Mailings = sequelize.define("mailings", {
  mailingId: {
    type: types.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  mailingType: { type: types.STRING, allowNull: false },
  dateOfSending: { type: types.DATE, allowNull: true, defaultValue: getCurrentDate()},
  status: { type: types.STRING, allowNull: false, defaultValue: "Отправлено" },
  linkOnReceipt: { type: types.STRING, allowNull: false },
});

module.exports = Mailings;
