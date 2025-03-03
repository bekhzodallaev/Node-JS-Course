require('dotenv').config();

module.exports = (Sequelize) => {
  const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      dialect: 'postgres',
    }
  );

  const news = require('../models/news')(Sequelize, sequelize);
  const comments = require('../models/comments')(Sequelize, sequelize);

  news.hasMany(comments, { foreignKey: 'nID' });

  return {
    news,
    comments,

    sequelize,
  };
};
