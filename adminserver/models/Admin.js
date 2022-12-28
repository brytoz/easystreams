const Sequelize = require('sequelize');
const db = require('../db/db')

const Admin = db.define('admins', {
    username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull:false
    },
    role: {
        type: Sequelize.STRING,
        unique: true,
        allowNull:false
    },
    password: {
        type: Sequelize.STRING,
        allowNull:false
    },
});


module.exports = Admin