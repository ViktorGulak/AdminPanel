const sequelize = require("./db_connection");
const { DataTypes: types } = require("sequelize");

const Receipts = sequelize.define("receipts", {
  receiptId: {
    type: types.INTEGER,
    primaryKey: true,
    //autoIncrement: true,
    allowNull: false,
  },
  title: { type: types.STRING, allowNull: false },
  text: { type: types.TEXT, allowNull: false },
});

module.exports = Receipts;
