const { DataTypes: types } = require("sequelize");
const departments = require("./departments"),
  statistics = require("./statistics"),
  users = require("./users"),
  tasks = require("./tasks"),
  notes = require("./notes"),
  advertisements = require("./advertisements"),
  clients = require("./clients"),
  individuals = require("./individuals"),
  legalEntities = require("./legal_entities"),
  mailings = require("./mailings"),
  receipts = require("./receipts"),
  informationAboutServices = require("./information_about_services");

departments.hasMany(statistics, {
  foreignKey: {
    name: "departmentId",
    type: types.INTEGER,
    allowNull: false,
  },
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

departments.hasMany(users, {
  foreignKey: {
    name: "departmentId",
    type: types.INTEGER,
    allowNull: false,
  },
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

departments.hasMany(clients, {
  foreignKey: {
    name: "departmentId",
    type: types.INTEGER,
    allowNull: false,
  },
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

departments.hasMany(mailings, {
  foreignKey: {
    name: "departmentId",
    type: types.INTEGER,
    allowNull: false,
  },
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

// mailings.hasOne(receipts, {
//   sourceKey: "mailingId",
//   foreignKey: {
//     name: "receiptId",
//     type: types.INTEGER,
//     allowNull: false,
//   },
//   onDelete: "CASCADE",
//   onUpdate: "CASCADE",
// });
//mailings.hasOne(receipts, { foreignKey: "receiptId" });
receipts.belongsTo(mailings, {
  targetKey: "mailingId",
  foreignKey: "receiptId",
});

receipts.hasMany(informationAboutServices, {
  foreignKey: {
    name: "receiptId",
    type: types.INTEGER,
    allowNull: false,
  },
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

users.hasMany(tasks, {
  foreignKey: {
    name: "userId",
    type: types.INTEGER,
    allowNull: false,
  },
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

users.hasMany(notes, {
  foreignKey: {
    name: "userId",
    type: types.INTEGER,
    allowNull: false,
  },
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

users.hasMany(advertisements, {
  foreignKey: {
    name: "userId",
    type: types.INTEGER,
    allowNull: false,
  },
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

// clients.hasOne(individuals, {
//   sourceKey: "clientId",
//   foreignKey: "individualId",
//   onDelete: "CASCADE",
//   onUpdate: "CASCADE",
// });

// clients.hasOne(legalEntities, {
//   sourceKey: "clientId",
//   foreignKey: "legalEntitieId",
//   onDelete: "CASCADE",
//   onUpdate: "CASCADE",
// });

individuals.belongsTo(clients, {
  targetKey: "clientId",
  foreignKey: "individualId",
});

legalEntities.belongsTo(clients, {
  targetKey: "clientId",
  foreignKey: "legalEntitieId",
});

module.exports = {
  departments,
  statistics,
  users,
  tasks,
  notes,
  advertisements,
  clients,
  individuals,
  legalEntities,
  mailings,
  receipts,
  informationAboutServices,
};
