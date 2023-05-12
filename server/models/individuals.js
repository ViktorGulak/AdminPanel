const sequelize = require("./db_connection");
const { DataTypes: types } = require("sequelize");

const Individuals = sequelize.define("individuals", {
  individualId: {
    type: types.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  surname: { type: types.STRING, allowNull: false },
  name: { type: types.STRING, allowNull: false },
  patronymic: { type: types.STRING, allowNull: false },
});

module.exports = Individuals;
