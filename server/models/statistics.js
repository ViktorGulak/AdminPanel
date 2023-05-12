const sequelize = require("./db_connection");
const { DataTypes: types } = require("sequelize");
const getCurrentDate = require("../helpers/getCurrentdate");

const Statistics = sequelize.define("statistics", {
  statisticId: {
    type: types.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  dateOfCreation: {
    type: types.DATEONLY,
    allowNull: false,
    defaultValue: getCurrentDate(),
  },
  quantitySendSms: { type: types.FLOAT, allowNull: false, defaultValue: 0 },
  quantityReceivedSms: { type: types.FLOAT, allowNull: false, defaultValue: 0 },
  relevanceSentReceived: {
    type: types.FLOAT,
    allowNull: false,
    defaultValue: 0,
  },
  totalQuantityClients: {
    type: types.FLOAT,
    allowNull: false,
    defaultValue: 0,
  },
  quantityPaids: { type: types.FLOAT, allowNull: false, defaultValue: 0 },
  quantityDeptors: { type: types.FLOAT, allowNull: false, defaultValue: 0 },
  relevancePaids: { type: types.FLOAT, allowNull: false, defaultValue: 0 },
  relevanceDeptors: { type: types.FLOAT, allowNull: false, defaultValue: 0 },
  relevanceReceivedPaid: {
    type: types.FLOAT,
    allowNull: false,
    defaultValue: 0,
  },
  companyEfficiency: { type: types.FLOAT, allowNull: false, defaultValue: 0 },
});

module.exports = Statistics;
