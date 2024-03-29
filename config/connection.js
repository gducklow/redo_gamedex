const { Sequelize } = require('sequelize');
require('dotenv').config();

// Set up Sequelize connection
let sequelize

if (process.env.POSTGRES_DB) {
  sequelize = new Sequelize(process.env.POSTGRES_DB);
} else {
  sequelize = new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASS,
      {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306,
      },
    );
};

module.exports = sequelize;