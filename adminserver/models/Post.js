const Sequelize = require('sequelize');
const db = require('../db/db')

const Users = db.define('posts', {
    posted_by: {
        type: Sequelize.STRING,
    },
    title: {
        type: Sequelize.STRING,
        unique: true,
    },
    home_team: {
        type: Sequelize.STRING,
    },
    away_team: {
        type: Sequelize.STRING,
    },
    home_img: {
        type: Sequelize.STRING,
    },
    away_img: {
        type: Sequelize.STRING,
    },
    match_day: {
        type: Sequelize.STRING,
    },
    match_time: {
        type: Sequelize.STRING,
    }, 
    league: {
        type: Sequelize.STRING,
    }, 
    sport_type: {
        type: Sequelize.STRING,
    },
    link_one: {
        type: Sequelize.STRING,
    },
    link_two: {
        type: Sequelize.STRING,
    },
    link_three: {
        type: Sequelize.STRING,
    },
    link_four: {
        type: Sequelize.STRING,
    },
    link_five: {
        type: Sequelize.STRING,
    },
    scores: {
        type: Sequelize.STRING,
    },
    ref: {
        type: Sequelize.STRING,
    },
    priority: {
        type: Sequelize.STRING,
    },
});


module.exports = Users