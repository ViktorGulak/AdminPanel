const sequelize = require("./db_connection");
const { DataTypes: types } = require("sequelize");

const LegalEntities = sequelize.define("legalEntities", {
  legalEntitieId: {
    type: types.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  organizationName: { type: types.STRING, allowNull: false },
});

module.exports = LegalEntities;
