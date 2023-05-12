const sequelize = require("./db_connection");
const { DataTypes: types } = require("sequelize");

const InformationAboutServices = sequelize.define("informationAboutServices", {
  serviceId: {
    type: types.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  service: { type: types.STRING, allowNull: false },
  price: { type: types.FLOAT, allowNull: false },
  payTo: { type: types.DATEONLY, allowNull: false },
  paidFor: { type: types.BOOLEAN, allowNull: false },
});

module.exports = InformationAboutServices;
