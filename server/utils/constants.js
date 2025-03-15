const constants = {
  JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret',
  DB_PATH: process.env.DB_PATH || './database.sqlite',
};

module.exports = constants;