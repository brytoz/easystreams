const Joi = require('joi')

const AdminValidation = (data) => {
  const schema = Joi.object().keys({
    username: Joi.string().min(6).required(),
    role: Joi.string().min(3).required(),
    password: Joi.string().min(6).required(),
  })
  return schema.validate(data)
}

const PostValidation = (data) => {
  const schema = Joi.object().keys({
    posted_by: Joi.optional(),
    title: Joi.string().min(3).required(),
    home_team: Joi.string().min(3).required(),
    away_team: Joi.string().min(3).required(),
    match_day: Joi.string().required(),
    match_time: Joi.string().required(),
    league: Joi.string().min(3).required(),
    sport_type: Joi.string().min(3).required(),
    link_one: Joi.optional(),
    link_two: Joi.optional(),
    link_three: Joi.optional(),
    link_four: Joi.optional(),
    link_five: Joi.optional(),
    ref: Joi.optional(),
    scores: Joi.optional(),
    home_img: Joi.string(),
    away_img: Joi.string(),
    priority: Joi.string().required(),
  })
  return schema.validate(data)
}

 
const LoginValidation = (data) => {
  const schema = Joi.object().keys({
    username: Joi.string().min(6).required(),
    password: Joi.string().min(6).required(),
  })
  return schema.validate(data)
}

const ScoreValidation = (data) => {
  const schema = Joi.object().keys({
    id: Joi.number().required(),
    scores: Joi.string().required(),
  })
  return schema.validate(data)
}

const LinkValidation = (data) => {
  const schema = Joi.object().keys({
    id: Joi.number().required(),
    link_one: Joi.string().required(),
    link_two: Joi.optional(),
    link_three: Joi.optional(),
    link_four: Joi.optional(),
    link_five: Joi.optional(),
  })
  return schema.validate(data)
}

const UpdatePasswordValidation = (data) => {
  const schema = Joi.object().keys({
    username: Joi.allow(),
    password: Joi.string().required(),
  })
  return schema.validate(data)
}

const UpdateImageValidation = (data) => {
  const schema = Joi.object().keys({
    id: Joi.number().required(),
    home_img: Joi.string(),
    away_img: Joi.string(),
  })
  return schema.validate(data)
}

const UpdateTimeInfoValidation = (data) => {
  const schema = Joi.object().keys({
    id: Joi.number().required(),
    title: Joi.string().required(),
    match_time: Joi.string().required(),
    match_day: Joi.string().required(),
  })
  return schema.validate(data)
}

const UpdatePriorityInfoValidation = (data) => {
  const schema = Joi.object().keys({
    id: Joi.number().required(),
    priority: Joi.string().required(),
  })
  return schema.validate(data)
}




module.exports = {
  UpdatePriorityInfoValidation,
  UpdateTimeInfoValidation,
  UpdateImageValidation,
  UpdatePasswordValidation,
  LinkValidation,
  ScoreValidation,
  LoginValidation,
  AdminValidation,
  PostValidation,
}
