const mongoose = require('mongoose');
const logger = require('../services/logger')

const initDB = () => {
  mongoose.connect(
    'mongodb://mongodb0.example.com:27017',
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
  )
  .catch(error => logger.error({message: error.message, error}));

  mongoose.connection.once('open', () => {
    logger.info('connected to database');
  });
}

module.exports = initDB;
