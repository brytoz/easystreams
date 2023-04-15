const { Sequelize } = require('sequelize');
const dotenv = require('dotenv')
// enable secure credentials
dotenv.config()

// process.env.DATABASE, process.env.USER, 
module.exports =  new Sequelize('easystreams', 'root', process.env.PASSWORD, {
  host: 'localhost',
  dialect:  'mysql',
  operatorsAliases: 0,

});

 