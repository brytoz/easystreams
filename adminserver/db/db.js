const { Sequelize } = require('sequelize');
const dotenv = require('dotenv')
// enable secure credentials
dotenv.config()

// process.env.DATABASE, process.env.USER, 
module.exports =  new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
  host: 'localhost',
  dialect:  'mysql',
  operatorsAliases: 0,

});

 