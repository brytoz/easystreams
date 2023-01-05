const administrator = require('express').Router()
const Post = require('../models/Post.js')
const Admin = require('../models/Admin.js')
const {
  PostValidation,
  AdminValidation,
  LoginValidation,
  ScoreValidation,
  LinkValidation,
  UpdatePasswordValidation,
  UpdateImageValidation,
  UpdateTimeInfoValidation,
  UpdatePriorityInfoValidation,
} = require('../rules/validation')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const { validateTokenAdmin } = require('../router/VerifyToken')
const { verify } = require('jsonwebtoken')
const uniqid = require('uniqid')
const upload = require('../rules/imageValidation.js')
const { Sequelize, sequelize } = require('sequelize')
dotenv.config()

// upadte priority
administrator.post('/update-priority', validateTokenAdmin, async (req, res) => {
  // error message check
  const { value, error } = UpdatePriorityInfoValidation(req.body)

  if (error) {
    return res.status(202).send(error.details[0].message)
  }

  const { id, priority } = req.body

  //id check
  const idCheck = await Post.findOne({
    where: { id },
  })
  if (!idCheck) return res.status(202).send('This ID does not exist!')

  // update balance status
  await Post.update({ priority }, { where: { id } })
    .then((userInfo) => {
      res.status(200).send('Priority Updated Successfully')
    })
    .catch((err) => {
      res
        .status(400)
        .send(
          'I think something might be wrong with your internet connection. Or try refreshing the page',
        )
    })
})

// upadte date-time-info
administrator.post(
  '/update-date-time-info',
  validateTokenAdmin,
  async (req, res) => {
    // error message check
    const { value, error } = UpdateTimeInfoValidation(req.body)

    if (error) {
      return res.status(202).send(error.details[0].message)
    }

    const { id, title, match_time, match_day } = req.body

    //id check
    const idCheck = await Post.findOne({
      where: { id },
    })
    if (!idCheck) return res.status(202).send('This ID does not exist!')

    // update balance status
    await Post.update({ title, match_time, match_day }, { where: { id } })
      .then((userInfo) => {
        res.status(200).send('Data Updated Successfully')
      })
      .catch((err) => {
        res
          .status(400)
          .send(
            'I think something might be wrong with your internet connection. Or try refreshing the page',
          )
      })
  },
)

// upadte password
administrator.post('/update-password', validateTokenAdmin, async (req, res) => {
  // error message check
  const { value, error } = UpdatePasswordValidation(req.body)

  if (error) {
    return res.status(202).send(error.details[0].message)
  }

  const { username } = req.body

  // encrypt the password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(req.body.password, salt)

  // update balance status
  await Post.update({ password: hashedPassword }, { where: { username } })
    .then((userInfo) => {
      res.status(200).send('Password Updated Successfully')
    })
    .catch((err) => {
      res
        .status(400)
        .send(
          'I think something might be wrong with your internet connection. Or try refreshing the page',
        )
    })
})

// upadte streaming links
administrator.post('/links', validateTokenAdmin, async (req, res) => {
  // error message check
  const { value, error } = LinkValidation(req.body)

  if (error) {
    return res.status(202).send(error.details[0].message)
  }

  const { id, link_one, link_two, link_three, link_four, link_five } = req.body

  //id duplicate check
  const idCheck = await Post.findOne({
    where: { id },
  })
  if (!idCheck) return res.status(202).send('this ID doesnt exist')

  // update balance status
  await Post.update(
    { link_one, link_two, link_three, link_four, link_five },
    { where: { id } },
  )
    .then((userInfo) => {
      res.status(200).send('Scores Updated Successfully')
    })
    .catch((err) => {
      res
        .status(400)
        .send(
          'I think something might be wrong with your internet connection. Or try refreshing the page',
        )
    })
})

// upadte scores
administrator.post('/scores', validateTokenAdmin, async (req, res) => {
  // error message check
  const { value, error } = ScoreValidation(req.body)

  if (error) {
    return res.status(202).send(error.details[0].message)
  }

  const { id, scores } = req.body

  //id duplicate check
  const idCheck = await Post.findOne({
    where: { id },
  })
  if (!idCheck) return res.status(202).send('this ID doesnt exist')

  // update balance status
  await Post.update({ scores }, { where: { id } })
    .then((userInfo) => {
      res.status(200).send('Scores Updated Successfully')
    })
    .catch((err) => {
      res
        .status(400)
        .send(
          'I think something might be wrong with your internet connection. Or try refreshing the page',
        )
    })
})

// make post
administrator.post('/post', validateTokenAdmin, upload, async (req, res) => {
  // error message check
  const { value, error } = PostValidation(req.body)

  if (error) {
    return res.status(202).send(error.details[0].message)
  }

  const {
    posted_by,
    title,
    home_team,
    away_team,
    match_day,
    match_time,
    league,
    sport_type,
    link_one,
    link_two,
    link_three,
    link_four,
    link_five,
    scores,
    priority,
    ref,
  } = req.body

  //username duplicate check
  const titleCheck = await Post.findOne({
    where: { title },
  })
  if (titleCheck) return res.status(202).send('This title already exist!')

  // send and save info - database
  await Post.create({
    posted_by,
    title,
    home_team,
    away_team,
    match_day,
    match_time,
    league,
    sport_type,
    link_one,
    link_two,
    link_three,
    link_four,
    link_five,
    priority,
    scores: '-',
    ref: uniqid(),
    home_img: req.files.home_img[0].path,
    away_img: req.files.away_img[0].path,
  })
    .then((userInfo) => {
      res.status(200).send('Post created successfully')
    })
    .catch((err) => {
      res
        .status(400)
        .send('I think something might be wrong with your internet connection')
    })
})

// update image post
administrator.post(
  '/update-image',
  validateTokenAdmin,
  upload,
  async (req, res) => {
    // error message check
    const { value, error } = UpdateImageValidation(req.body)

    if (error) {
      return res.status(202).send(error.details[0].message)
    }

    const { id } = req.body

    //id check
    const idCheck = await Post.findOne({
      where: { id },
    })
    if (!idCheck) return res.status(202).send('This ID does not exist!')

    // send and save info - database
    await Post.update(
      {
        home_img: req.files.home_img[0].path,
        away_img: req.files.away_img[0].path,
      },
      { where: { id } },
    )
      .then((userInfo) => {
        res.status(200).send('Image Updated successfully')
      })
      .catch((err) => {
        res
          .status(400)
          .send(
            'I think something might be wrong with your internet connection',
          )
      })
  },
)

// add admin USERS
administrator.post('/register', validateTokenAdmin, async (req, res) => {
  // error message check
  const { value, error } = AdminValidation(req.body)

  if (error) {
    return res.status(202).send(error.details[0].message)
  }

  const { username, role } = req.body

  //username duplicate check
  const userCheck = await Admin.findOne({
    where: { username },
  })
  if (userCheck) return res.status(202).send('Username already Exists')

  // encrypt the password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(req.body.password, salt)

  // send and save info - database
  await Admin.create({
    username,
    role,
    password: hashedPassword,
  })
    .then((userInfo) => {
      res.status(200).send('New Admin created Successful')
    })
    .catch((err) => {
      res
        .status(400)
        .send('I think something might be wrong with your internet connection')
    })
})

// LOGIN
administrator.post('/login', async (req, res, next) => {
  // error message check
  const { value, error } = LoginValidation(req.body)

  if (error) {
    return res.status(202).send(error.details[0].message)
  }

  const { username, password } = req.body

  //Email duplucate check
  const userCheck = await Admin.findOne({
    where: { username },
  })
  if (!userCheck) return res.status(202).send('username doesnt exist')

  //  check Password
  const passwordCheck = await bcrypt
    .compare(password, userCheck.password)
    .then((result) => {
      if (!result) return res.status(400).send('Invalid Password')

      const giveToken = jwt.sign(
        {
          id: userCheck.id,
          username: userCheck.username,
        },
        process.env.COOKIE,
        { expiresIn: '1d' },
      )

      const newCookie = res.cookie('administrator', giveToken, {
        maxAge: 24 * 60 * 60 * 1000,
        path: '/',
        // httpOnly: true,
        // secure:true,
        // signed: true
      })

      if (newCookie) {
        res.status(200).json({
          data: 'Success. Redirecting...',
          user: username,
          auth: true,
          loggedIn: true,
        })
      } else {
        res.clearCookie('administrator')
        res.status(400).json({ auth: false, loggedIn: false })
      }
    })

  next()
})

// get user LOGIN
administrator.get('/login', validateTokenAdmin, async (req, res, next) => {
  var token =
    req.cookies.administrator ||
    req.headers['x-access-token'] ||
    req.headers['authorization']

  if (!token) {
    return res
      .status(400)
      .send('You cannot perform any activities until you are logged In')
  }

  verify(token, process.env.COOKIE, async (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' })
    } else {
      req.decoded = decoded

      await Admin.findByPk(req.decoded.id, async (err, user) => {
        return (req.currentUser = user)
      })
        .then((data) => res.status(200).json({ data }))
        .catch((err) =>
          res.status(403).send('Unable to fetch your requested data'),
        )
    }
  })
})

// get all users
administrator.get('/users', validateTokenAdmin, (req, res) =>
  Admin.findAll()
    .then((data) => res.status(200).send(data))
    .catch((err) =>
      res.status(400).send('Unable to fetch your requested data'),
    ),
)

// get all posts
administrator.get('/post', (req, res) =>
  Post.findAll()
    .then((data) => res.status(200).send(data))
    .catch((err) =>
      res.status(400).send('Unable to fetch your requested data'),
    ),
)

// get all new posts
administrator.get('/post-new', (req, res) => {
 
  let objectDate = new Date()
  let day = objectDate.getDate()
  if (day < 10) day = '0' + day;
  
  let month = objectDate.getMonth() + 1;
  if (month < 10) month = '0' + month;
  
  let year = objectDate.getFullYear();
  let fulldate = year + '-' + month + '-' + day;

  // let hours = objectDate.getHours() - 1
  // let minutes = objectDate.getMinutes()
  // let fulltime =   hours + ':' + minutes

  let date = new Date()
  date.setHours(date.getHours() - 2)

 
  let timeMinus = date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })

  let t = '01:59' ;
  Post.findAll({
    where: {
    match_day: { [Sequelize.Op.gte]: fulldate },
    match_time: {
      [Sequelize.Op.or]: {
        [Sequelize.Op.gte]: timeMinus,
        [Sequelize.Op.lte]: t,
      },
    },
  
    $and: Sequelize.where(
      Sequelize.fn('char_length', Sequelize.col('scores')),
      {
        [Sequelize.Op.lte]: 1,
      }, 
    ),
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

// get all upcoming posts
administrator.get('/post-upcoming', (req, res) => {
 
  let objectDate = new Date()
  let day = objectDate.getDate()
  if (day < 10) day = '0' + day;
  
  let month = objectDate.getMonth() + 1;
  if (month < 10) month = '0' + month;
  
  let year = objectDate.getFullYear();
  let fulldate = year + '-' + month + '-' + day;
 
  Post.findAll({
    where: {
    match_day: { [Sequelize.Op.gt]: fulldate },
  },
    order: [
      ['match_day', 'ASC'],
      ['match_time', 'ASC'],
      ['priority', 'ASC'],
    ],
  })
    .then((data) => {
      res.status(200).send(data)
    })
    .catch((err) => res.status(400).send('Unable to fetch your requested data'))
})

// get all new update posts
administrator.get('/post-new-update', (req, res) => {

  let objectDate = new Date()
  let day = objectDate.getDate()
  if (day < 10) day = '0' + day;
  
  let month = objectDate.getMonth() + 1;
  if (month < 10) month = '0' + month;
  
  let year = objectDate.getFullYear();
  let fulldate = year + '-' + month + '-' + day;

  let hours = objectDate.getHours() - 1
  let minutes = objectDate.getMinutes()
  let fulltime =   hours + ':' + minutes

  // Post.findAll({
  //   where: {
  //     match_day: { [Sequelize.Op.gte]: fulldate },
  //     match_time: { [Sequelize.Op.gte]: fulltime },
  //   },
  //   order: [
  //     ['match_day', 'ASC'],
  //     ['match_time', 'ASC'],
  //     ['priority', 'ASC'],
  //   ],
  // })
  Post.findAll({
    where: {
      match_day:  { [Sequelize.Op.gte]: fulldate },  
    },
    order: [
      ['match_day', 'ASC'],
      ['match_time', 'DESC'],
    ],
  })
    .then((data) => {
      res.send(data)
    })
    .catch((err) => res.status(400).send('Unable to fetch your requested data'))
})

administrator.get('/post-old', (req, res) => {
  Post.findAll({
    where: Sequelize.where(
      Sequelize.fn('char_length', Sequelize.col('scores')),
      {
        [Sequelize.Op.gt]: 2,
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

// get all posts with ld
administrator.get(
  '/post/:id/',
  async (req, res) =>
    await Post.findAll({
      where: {
        id: req.params.id,
      },
    })
      .then((data) => res.status(200).send(data))
      .catch((err) =>
        res.status(400).send('Unable to fetch your requested data'),
      ),
)

//logout
administrator.get('/logout', (req, res, next) => {
  if (req.cookies.administrator) {
    res.clearCookie('administrator')
    res.status(202).json({ auth: false, loggedIn: false, cookie: 'No cookies' })
    res.end()
  } else {
    res
      .status(202)
      .json({ auth: false, loggedIn: false, cookie: 'You are not logged in' })
    next()
  }

  next()
})

// delete  posts with ld
administrator.post('/delete-post', validateTokenAdmin, async (req, res) => {
  const { id } = req.body

  // delete   status
  await Post.destroy({
    where: {
      id: id,
    },
  })
    .then((userInfo) => {
      res.status(200).send('Deleted Successfully')
    })
    .catch((err) => {
      res
        .status(400)
        .send(
          'I think something might be wrong with your internet connection. Or try refreshing the page.',
        )
    })
})

module.exports = administrator
