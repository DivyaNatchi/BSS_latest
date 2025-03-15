const { Sequelize } = require("sequelize");
const config = require("./config");

/*
const path = require('path');
console.log(path.resolve(config.dbPath) );
*/

// Create a new instance of Sequelize for SQLite
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: config.dbPath,
  logging: false, // Disable logging; default: console.log
  // logging: console.log,
});

module.exports = sequelize;
