const sequelize = require("./db_connection");
const { DataTypes: types } = require("sequelize");

const Clients = sequelize.define("clients", {
  clientId: {
    type: types.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  phone: { type: types.STRING(11), allowNull: false },
  email: { type: types.STRING, allowNull: false },
  personalAccount: { type: types.STRING, allowNull: false },
  addres: { type: types.STRING, allowNull: false },
  debtor: { type: types.BOOLEAN, allowNull: false },
});

module.exports = Clients;
