const matches = require('express').Router()
const Post = require('../models/Post.js')
const dotenv = require('dotenv')
const { Sequelize } = require('sequelize')
dotenv.config()

 
 
// get all new posts
matches.get('/post-new', (req, res) => {
  let objectDate = new Date()
  let day = objectDate.getDate()
  let month = objectDate.getMonth() + 1
  let year = objectDate.getFullYear()
  let fulldate = year + '-' + month + '-' + day

  const date = new Date()
  date.setHours(date.getHours() - 2)

  const nows = new Date()
  nows.setHours(nows.getHours())

  const timeMinus = date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })

  const t = '01:59'
  Post.findAll({
    where: {
      match_day: { [Sequelize.Op.gte]: fulldate },
    //   match_time: {
    //     [Sequelize.Op.or]: {
    //       [Sequelize.Op.gte]: timeString,
    //       [Sequelize.Op.lte]: t,
    //     },
    //   },
      match_time: {[Sequelize.Op.gte]: timeMinus,},
    },
    order: [
      ['match_day', 'ASC'],
      ['priority', 'ASC'],
      ['match_time', 'ASC'],
    ],
  })
    .then((data) => {
      res.status(200).send(data)
    })
    .catch((err) => res.status(400).send('Unable to fetch your requested data'))
})

// get all new posts
matches.get('/post-new-update', (req, res) => {
  let objectDate = new Date()
  let day = objectDate.getDate()
  let month = objectDate.getMonth() + 1
  let year = objectDate.getFullYear()
  let fulldate = year + '-' + month + '-' + day

  const date = new Date()
  date.setHours(date.getHours() - 2)
  const timeMinus = date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })

  const t = '01:59'
  
  Post.findAll({
    where: {
      match_day: { [Sequelize.Op.gte]: fulldate },

      match_time: {[Sequelize.Op.gte]: timeMinus},
    },
    order: [
      ['match_day', 'ASC'],
      ['priority', 'ASC'],
      ['match_time', 'ASC'],
    ],
  })
    .then((data) => {
      res.status(200).send(data)
    })
    .catch((err) => res.status(400).send('Unable to fetch your requested data'))
})


matches.get('/post-old', (req, res) => {
  Post.findAll({
    where: Sequelize.where(
      Sequelize.fn('char_length', Sequelize.col('scores')),
      {
        [Sequelize.Op.gt]: 1,
      },
    ),
    order: [
      ['match_day', 'DESC'],
      ['match_time', 'DESC'],
    ],
  })
    .then((results) => {
      res.status(200).json(results)
    })
    .catch((error) => {
      res.status(500).send('Error fetching data')
    })
})

 

 


module.exports = matches
